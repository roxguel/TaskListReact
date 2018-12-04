import { Component } from "react";
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';

const { Option } = Select;

class TaskDrawer extends Component {
    state = { visible: false, task:{}, title: 'Create new task' };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    loadAndShow = (task) => {
        this.setState({task});
        this.props.form.setFieldsValue({
            name: task.name,
            description: task.description,
            image: task.image,
            priority: task.priority,
        });
        this.showDrawer();
    }

    saveAndClose = () => {

    }

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    /**
     * Esto esta agarrado de los pelos
     */
    handleChange = (e) => {
        let values = this.props.form.getFieldsValue();
        let task = {
            name: values.name,
            description: values.description,
            image: values.image,
            priority: values.priority
        }
        this.setState({task});
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Drawer
                title={this.state.title}
                width={360}
                placement="right"
                onClose={this.onClose}
                maskClosable={false}
                visible={this.state.visible}
                style={{
                    height: 'calc(100% - 55px)',
                    overflow: 'auto',
                    paddingBottom: 53,
                }}
            >
                <Form layout="vertical" id="form-task" hideRequiredMark onChange={this.handleChange}>
                    <Row gutter={16}>
                        <Col span={32}>
                            <Form.Item label="Name">
                                {getFieldDecorator('name', {
                                    rules: [{ required: true, message: 'please enter name' }],
                                })(<Input placeholder="please enter name" />)}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={32}>
                            <Form.Item label="Description">
                                {getFieldDecorator('description', {
                                    rules: [{ required: true, message: 'please enter description' }],
                                })(<Input.TextArea placeholder="please enter description" />)}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={32}>
                            <Form.Item label="URL Image">
                                {getFieldDecorator('image', {
                                    rules: [{ required: true, message: 'please enter url image' }],
                                })(<Input placeholder="please enter url image" />)}
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={32}>
                            <Form.Item label="Priority">
                                {getFieldDecorator('priority', {
                                    rules: [{ required: true, message: 'Please choose the priority' }],
                                    initialValue: 'low',
                                })(
                                    <Select placeholder="Please choose the priority">
                                        <Option value="low">Low</Option>
                                        <Option value="medium">Medium</Option>
                                        <Option value="high">High</Option>
                                    </Select>
                                )}
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        width: '100%',
                        borderTop: '1px solid #e8e8e8',
                        padding: '10px 16px',
                        textAlign: 'right',
                        left: 0,
                        background: '#fff',
                        borderRadius: '0 0 4px 4px',
                    }}
                >
                    <Button
                        style={{
                            marginRight: 8,
                        }}
                        onClick={this.onClose}
                    >
                        Cancel
                	</Button>
                    <Button onClick={this.saveAndClose} type="primary">Submit</Button>
                </div>
            </Drawer>
        );
    }
}

const TaskDrawerForm = Form.create()(TaskDrawer);

export default TaskDrawerForm;