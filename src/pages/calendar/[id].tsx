import { LebkuchenHouse } from "@/components/Lebkuchenhaus/House";
import { Calendar } from "@/domain/Calendar";
import { IAdventcalendar } from "@/domain/generated/contentful";
import ContentService from "@/services/contentful";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CalendarPage = () => {
  const router = useRouter();
  const [calendar, setCalendar] = useState<Calendar | undefined>(undefined);
  console.log(router.query.id);

  useEffect(() => {
    const getCalendar = async (id: string) => {
      const currCalendar = await ContentService.getCalendarByIdentifier(id);
      console.log(currCalendar);
      if (currCalendar) setCalendar(currCalendar);
    };

    if (typeof router.query.id === "string") {
      getCalendar(router.query.id);
    }
  }, [router.query.id]);

  if (!calendar) {
    return (
      <div>
        No calendar found! Please check your url or contact the person who send
        you this link to check if everything is setup.
      </div>
    );
  }
  return (
    <main className="flex flex-col bg-indigo-950 bg-or">
      <LebkuchenHouse
        data={calendar.entries.map((e) => ({
          imageUrl: e.image ?? "",
          text: e.text,
          day: parseInt(e.day),
        }))}
      />
    </main>
  );
};

export default CalendarPage;
