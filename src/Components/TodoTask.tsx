import { ITask } from "../Interfaces";
import { Col, Row, Space, Form, Input, Button, Card } from 'antd';

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
    return (
        <Card
            onClick={() => {
                completeTask(task.taskName);
                }}
            style={{ marginTop: 16 }}   
        >
            <Row>
                <Col span={18}>
                    <p>{task.taskName}</p>
                </Col>
                <Col span={6}>
                    <p>{task.deadline}</p>
                </Col>
            </Row>
        </Card>
    );
};

export default TodoTask;