import { FC } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Heading } from "@/components/Heading";
import { timelineData } from "@/data";

const Timeline: FC = () => {
  return (
    <section
      id="experience"
      className="flex flex-col justify-center mt-8 pt-20"
    >
      <div className="md:px-24 xl:px-0">
        <Heading>Timeline</Heading>
        <div className="mt-8">
          <p className="text-gray-400 text-base md:text-lg">
            In my software engineering journey I have worked with several
            technologies while building several projects. Here are the brief
            overview.
          </p>

          <div className="mt-8">
            <VerticalTimeline>
              {timelineData.map((item) => (
                <VerticalTimelineElement
                  className="vertical-timeline-element--work "
                  contentStyle={{
                    background: "#1e293b",
                    color: "#9ca3af",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  #1e293b",
                  }}
                  date={item.date}
                  iconStyle={{
                    background: "#3b82f6",
                    color: "#ffffff",
                  }}
                  icon={item.icon}
                  key={item.id}
                >
                  <h3 className="vertical-timeline-element-title text-2xl">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.location}
                  </h4>
                  <p>{item.description}</p>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
