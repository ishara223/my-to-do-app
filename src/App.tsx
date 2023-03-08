import React, { FC, ChangeEvent, useState } from "react";
import "./App.css";
import { Col, Row, Space, Form, Input, Button, Card } from 'antd';

import TodoTask from "./Components/TodoTask";
import { ITask } from "./Interfaces";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDealine] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDealine(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    if(task === ""){

    }else{
      setTodoList([...todoList, newTask]);
      setTask("");
      setDealine(0);
    }
    
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div className="App">
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}></Space>
      <Row>
        <Col span={24}>
          <h1>To Do List</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={24} xl={12}>
          <Card title="Insert task">
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              
              autoComplete="off"
            >
              <Form.Item
                label="Task"
                rules={[{ required: true, message: 'Please input your Tasks' }]}
              >
                <Input 
                  type="text"
                  placeholder="Task..."
                  name="task"
                  value={task}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item
                label="Time alocated (in hours)..."
                rules={[{ message: 'Please input your Allocated time' }]}
              >
                <Input 
                  type="number"
                  name="deadline"
                  value={deadline}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" onClick={addTask}>
                  Add Task
                </Button>
              </Form.Item>
            </Form>
          </Card>
          
        </Col>
        <Col xs={24} xl={12}>
          <Card title="Your Tasks">
            <div className="todoList">
              {todoList.map((task: ITask, key: number) => {
                return <TodoTask key={key} task={task} completeTask={completeTask} />;
              })}
            </div>
          </Card>   
        </Col>
      </Row>
    </div>
  );
};

export default App;
