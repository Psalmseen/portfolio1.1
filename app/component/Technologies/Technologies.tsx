import React from "react";

import { DiFirebase, DiGit, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "@/app/styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle main>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      from Back-end to design
    </SectionText>
    <List>
      <ListItem>
        <DiReact size={"3rem"} />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br /> Typescript, React.js, Redux, Mobx,LitElement,
            Next.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size={"3rem"} />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br /> Node.js and Databases(Mongodb, Postgres)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size={"3rem"} />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experieence with <br /> tools like figma and Zeplin
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiGit size={"3rem"} />
        <ListContainer>
          <ListTitle>Version control / Automation</ListTitle>
          <ListParagraph>
            Experieence with <br /> tools like Github action, Ansible,
            Terraform, Docker.
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
