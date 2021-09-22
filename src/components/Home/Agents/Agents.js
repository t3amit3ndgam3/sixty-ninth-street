import React from "react";
import agent1 from "../../../images/agent.jpeg";
import agent from "../../../images/agent1.jpeg";
import Agent from "../Agent/Agent";

const Agents = () => {
  const agentsData = [
    {
      name: "Unmoy Biswas",
      img: agent,
      description: "Real Estate Agent",
    },
    {
      name: "Golam Rabby",
      img: agent1,
      description: "Real Estate Agent",
    },
    {
      name: "Niaz",
      img: agent,
      description: "Real Estate Agent",
    },
    {
      name: "Morshed",
      img: agent1,
      description: "Real Estate Agent",
    },
    {
      name: "Md Rahatul",
      img: agent,
      description: "Real Estate Agent",
    },
    {
      name: "Hero Alom",
      img: agent1,
      description: "Real Estate Agent",
    },
  ];
  return (
    <>
      <section className="my-5 container">
        <div className="text-center">
          <h2>Our Agents</h2>
          <small>
            Get started by choosing from one of our pre-built page templates to
            showcase your properties
          </small>
        </div>
        <div className="text-center my-5">
          {agentsData.map((agentData) => (
            <Agent data={agentData}></Agent>
          ))}
        </div>
      </section>
    </>
  );
};

export default Agents;
