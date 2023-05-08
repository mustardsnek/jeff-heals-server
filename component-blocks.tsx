import {
  NotEditable,
  component,
  fields,
} from "@keystone-6/fields-document/component-blocks";
import { CTA } from "@mustardsnek/vesslio-storybook";

export const componentBlocks = {
  hero: component({
    preview: (props) => {
      return (
        <NotEditable>
          -
          {/* <MultiHero title={props.fields.title.fields.string.value}></MultiHero> */}
        </NotEditable>
      );
    },
    label: "Hero",
    schema: {
      image: fields.object({
        src: fields.text({ label: "Image source" }),
        class: fields.text({ label: "Image class" }),
      }),

      title: fields.object({
        string: fields.text({ label: "Hero title" }),
        class: fields.text({ label: "Hero title class" }),
        enunciation: fields.text({ label: "Enunciation" }),
      }),
      copy: fields.text({ label: "Copy" }),
      bg: fields.object({
        parent: fields.text({ label: "Background Class" }),
        children: fields.array(fields.text({ label: "Child class" })),
      }),
      textbg: fields.text({ label: "Text Background" }),
      textclass: fields.text({ label: "Text Class" }),
      links: fields.array(
        fields.object({
          link: fields.text({ label: "link" }),
          description: fields.text({ label: "description" }),
          class: fields.text({ label: "class" }),
        })
      ),
    },
  }),
  cta: component({
    preview: (props) => {
      return (
        <NotEditable>
          <CTA></CTA>
        </NotEditable>
      );
    },
    label: "CTA",
    schema: {},
  }),
  postCarousel: component({
    preview: (props) => {
      return <NotEditable>-</NotEditable>;
    },
    label: "Post Carousel",
    schema: {
      preview: fields.checkbox({ label: "Preview image" }),
      detailed: fields.checkbox({ label: "Detailed post" }),
    },
  }),
  suggestions: component({
    preview: (props) => {
      return <NotEditable>-</NotEditable>;
    },
    label: "Suggestions",
    schema: {},
  }),
  storyCarousel: component({
    preview: (props) => {
      return <NotEditable>-</NotEditable>;
    },
    label: "Story Carousel",
    schema: {
      preview: fields.checkbox({ label: "Preview image" }),
      intro: fields.text({ label: "Introduction" }),
    },
  }),
  intake: component({
    preview: (props) => {
      return <NotEditable>-</NotEditable>;
    },
    label: "Intake",
    schema: {
      questions: fields.array(
        fields.object({
          question: fields.text({ label: "Question" }),
          description: fields.text({ label: "Description" }),
          answers: fields.array(
            fields.object({
              answer: fields.text({ label: "Answer" }),
            })
          ),
        })
      ),
    },
  }),
  faq: component({
    preview: (props) => {
      return <NotEditable>-</NotEditable>;
    },
    label: "FAQ",
    schema: {
      questions: fields.array(
        fields.object({
          question: fields.text({ label: "Question" }),
          answers: fields.array(
            fields.object({
              answer: fields.text({ label: "Answer" }),
            })
          ),
        })
      ),
    },
  }),
  postCardPane: component({
    preview: (props) => {
      return <div>{props.fields.intro.element}</div>;
    },
    label: "Post Card Pane",
    schema: {
      intro: fields.child({
        kind: "block",
        placeholder: "Introduction",
        formatting: { inlineMarks: "inherit", softBreaks: "inherit" },
      }),
      vertical: fields.checkbox({ label: "Vertical layout" }),
    },
  }),
  numberCardPane: component({
    preview: (props) => {
      return <div>{props.fields.intro.element}</div>;
    },
    label: "Number Card Pane",
    schema: {
      intro: fields.child({
        kind: "block",
        placeholder: "Introduction",
        formatting: { inlineMarks: "inherit", softBreaks: "inherit" },
      }),
      vertical: fields.checkbox({ label: "Vertical layout" }),
      cards: fields.array(
        fields.object({
          title: fields.text({ label: "Title" }),
          copy: fields.text({ label: "Copy" }),
          number: fields.integer({ label: "Number" }),
        })
      ),
    },
  }),
  cardFilterer: component({
    preview: (props) => {
      return <NotEditable>-</NotEditable>;
    },
    label: "Card Filterer",
    schema: {},
  }),
  mixPostSimilar: component({
    preview: (props) => {
      return <NotEditable>-</NotEditable>;
    },
    label: "Post + Similar Pane",
    schema: {},
  }),
  postHero: component({
    preview: (props) => {
      return <NotEditable>-</NotEditable>;
    },
    label: "Post Hero",
    schema: {},
  }),
};
