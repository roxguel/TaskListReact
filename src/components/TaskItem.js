import { Card } from 'antd';
import { Component } from "react";

const { Meta } = Card;

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.task = props.task;
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onClick(this.task);
    }
    render() {
        return (
            <Card hoverable
                onClick={this.handleClick}
                style={{ margin: 10, marginBottom: 10, width: 'calc(25% - 20px)' }}
                cover={this.task.image ? <img alt={this.task.name} src={this.task.image} /> : null}
            >
                <Meta title={this.task.name} description={this.task.description} />
            </Card>
        );
    }
}

export default TaskItem;