import { DayProps } from "@/domain/DayProps";

export const createSections = (data: DayProps[]): DayProps[][] => {
  let sections = [];

  for (let i = 0; i < 6; i++) {
    const start = i * 4;
    const end = start + 4;
    sections.push(data.slice(start, end));
  }

  return sections;
};
