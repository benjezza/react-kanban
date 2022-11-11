import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Task from "./task";


const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 500px;
  display: flex;
  flex-direction: column;
`;
const ColumnHeader = styled.div`
  padding: 8px;
  background-color: lightgrey;
  border-radius: 2px;
  min-height: 130px;
`;
const Title = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const SubTitle = styled.h4`
  text-align: center;
  color: white;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
  &:before {
    content: "-- ";
  }
  &:after {
    content: " --";
  }
`;

const TaskList = styled.div`
  padding: 8px;
  transition: background-color .8s ease;
  background-color: ${props => (props.isDraggingOver ? "skyblue" : "white")};
  flex-grow: 1;
`;

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <ColumnHeader>
        <Title>{this.props.column.title}</Title>
        <SubTitle>{this.props.column.subTitle}</SubTitle>
        </ColumnHeader>
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
            <TaskList 
            ref={provided.innerRef} 
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    );
  }
}
