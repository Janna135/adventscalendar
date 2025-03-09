import { Calendar } from "@/domain/Calendar";
import { IAdventcalendarFields } from "@/domain/generated/contentful";
import { createClient, EntryCollection } from "contentful";

class ContentServiceClient {
  private contentful;

  constructor() {
    this.contentful = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API || "",
      host: "cdn.contentful.com",
    });
  }

  getCalendarByIdentifier = async (
    id: string
  ): Promise<Calendar | undefined> => {
    const result = await this.contentful
      .getEntries({
        content_type: "adventcalendar",
      })
      .then((res) => {
        const currCalendar: IAdventcalendarFields | undefined = res.items.find(
          (e) => e.fields.identifier === id
        )?.fields as IAdventcalendarFields | undefined;
        return currCalendar
          ? {
              identifier: currCalendar.identifier,
              entries: currCalendar.entries?.map((e) => ({
                // @ts-expect-error
                image: "https:" + e.fields.image.fields.file.url ?? "",
                // @ts-expect-error
                text: e.fields.text,
                // @ts-expect-error
                day: parseInt(e.day),
              })),
            }
          : undefined;
      });

    return result as Calendar | undefined;
  };
}

const ContentService = new ContentServiceClient();

export default ContentService;
