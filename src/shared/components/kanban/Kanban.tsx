import React, { useState } from "react";
import { Card, Col, Row } from "antd";

import { CSS } from "@dnd-kit/utilities";
import { DndContext, DragEndEvent, useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";

import "./Kanban.scss";

interface Task {
  id: string;
  title: string;
  column: string;
}

const initialTasks: Task[] = [
  { id: "1", title: "Task 1", column: "todo" },
  { id: "2", title: "Task 2", column: "todo" },
  { id: "3", title: "Task 3", column: "inprogress" },
  { id: "4", title: "Task 4", column: "inprogress" },
  { id: "5", title: "Task 5", column: "done" },
];

export const Kanban: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (over) {
      setTasks((prevTasks) => {
        const activeTaskIndex = prevTasks.findIndex(
          (task) => task.id === active.id
        );
        const overTaskIndex = prevTasks.findIndex(
          (task) => task.id === over.id
        );

        const updatedTasks = arrayMove(
          prevTasks,
          activeTaskIndex,
          overTaskIndex !== -1 ? overTaskIndex : prevTasks.length - 1
        );

        return updatedTasks.map((task) => {
          if (task.id === active.id) {
            const overContainerId =
              over.data.current?.sortable?.containerId || task.column;
            return { ...task, column: overContainerId };
          }
          return task;
        });
      });
    }
  };

  return (
    <div className="kanban-container">
      <h3>Kanban</h3>
      <DndContext onDragEnd={handleDragEnd}>
        <Row gutter={[16, 16]}>
          {["todo", "inprogress", "done"].map((column) => (
            <Col span={8} key={column}>
              <SortableContext
                id={column}
                items={tasks
                  .filter((task) => task.column === column)
                  .map((task) => task.id)}
                strategy={rectSortingStrategy}
              >
                <Card
                  className={`kanban-column ${column}`}
                  title={column.charAt(0).toUpperCase() + column.slice(1)}
                >
                  {tasks
                    .filter((task) => task.column === column)
                    .map((task) => (
                      <TaskCard key={task.id} task={task} />
                    ))}
                  <DroppableColumn column={column} />
                </Card>
              </SortableContext>
            </Col>
          ))}
        </Row>
      </DndContext>
    </div>
  );
};

const TaskCard: React.FC<{ task: Task }> = ({ task }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style: React.CSSProperties = {
    cursor: "move",
    marginBottom: 8,
    backgroundColor: isDragging ? "#f0f0f0" : undefined,
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Card>{task.title}</Card>
    </div>
  );
};

const DroppableColumn: React.FC<{ column: string }> = ({ column }) => {
  const { setNodeRef } = useDroppable({ id: column });

  return <div ref={setNodeRef} style={{ minHeight: 8 }} />;
};
