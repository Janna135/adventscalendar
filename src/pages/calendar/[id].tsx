import { LebkuchenHouse } from "@/components/Lebkuchenhaus/House";
import { Loading } from "@/components/Loading";
import { Calendar } from "@/domain/Calendar";
import ContentService from "@/services/contentful";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CalendarPage = () => {
  const router = useRouter();
  const [calendar, setCalendar] = useState<Calendar | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getCalendar = async (id: string) => {
      const currCalendar = await ContentService.getCalendarByIdentifier(id);
      if (currCalendar) setCalendar(currCalendar);
      setLoading(false);
    };

    if (typeof router.query.id === "string") {
      getCalendar(router.query.id);
    }
  }, [router.query.id]);

  if (loading) {
    return <Loading />;
  }
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
