import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  padding: 22px 8px;
  border-radius: 2px;
  margin-bottom: 8px;
  background-color: ${props => (props.isDragging ? "#bada55" : "white")};
  color: ${props => (props.isDragging ? "white" : "black")};
  transition: color 0.8s ease;
  transition: background-color 0.8s ease;
`;

export default class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container 
          {...provided.draggableProps} 
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          >
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}
