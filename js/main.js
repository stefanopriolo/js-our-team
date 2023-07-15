"use strict";

const memberList = [
  {
    userName: "Wayne Barnett",
    userRole: "Founder & CEO",
    userImg: "wayne-barnett-founder-ceo.jpg",
  },
  {
    userName: "Angela Caroll",
    userRole: "Chief Editor",
    userImg: "angela-caroll-chief-editor.jpg",
  },
  {
    userName: "Walter Gordon",
    userRole: "Office Manager",
    userImg: "walter-gordon-office-manager.jpg",
  },
  {
    userName: "Angela Lopez",
    userRole: "Social Media Manager",
    userImg: "angela-lopez-social-media-manager.jpg",
  },
  {
    userName: "Scott Estrada",
    userRole: "Developer",
    userImg: "userscott-estrada-developer.jpg",
  },
  {
    userName: "Barbara Ramos",
    userRole: "Graphic Designer",
    userImg: "barbara-ramos-graphic-designer.jpg",
  },
];

console.log(memberList);

for (let i = 0; i < memberList.length; i++) {
  const member = memberList[i];

  console.log(
    `Name: ${member.userName} / Role: ${member.userRole} / ${member.userImg}`
  );
}
