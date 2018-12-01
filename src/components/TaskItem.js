import styles from './TaskItem.css';
import { Card } from 'antd';
import { Component } from "react";

const { Meta } = Card;

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.task = props.task;
    }
    render() {
        return (
            <Card hoverable style={{marginBottom: 10}} cover={this.task.image ? <img alt={this.task.name} src={this.task.image} /> : null}>
                <Meta title={this.task.name} description={this.task.description} />
            </Card>
        );
    }
}

export default TaskItem;