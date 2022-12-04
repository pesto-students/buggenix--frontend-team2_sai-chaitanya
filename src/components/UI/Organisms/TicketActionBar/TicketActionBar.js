import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space, message  } from "antd";
import { useState } from "react";
import { axiosPrivate } from "../../../../api/axios";
import ProjectListDropdown from "../../Molecules/ProjectListDropdown/ProjectListDropdown";
import SortByTimeDropdown from "../../Molecules/SortByTimeDropdown";
import TicketStatusDropdown from "../../Molecules/TicketStatusDropdown";
import TicketTypeDropdown from "../../Molecules/TicketTypeDropdown/TicketTypeDropdown";
import styles from "./TicketActionBar.module.css";

const { Option } = Select;



const TicketActionBar = ({createTicket, onChange, filterAttributes, projectsList, updateProject, selectedProject, usersList}) => {

    const [messageApi, contextHolder] = message.useMessage();
    const [open, setOpen] = useState(false);
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState(null);
    const [assigneeId, setAssigneeId] = useState(null);
    const [ticketType, setTicketType] = useState(null);
    const [ticketStatus, setTicketStatus] = useState(null);
    const [projectId, setProjectId] = useState(null);

    const ticketCreationSuccess = () => {
        messageApi.open({
          type: 'success',
          content: 'Ticket has been created',
        });
      };
      const ticketCreationError = () => {
        messageApi.open({
          type: 'error',
          content: 'Ticket creation failed',
        });
      };


    const handleChange = (e) => {
        const {name: type, value} = e.target;
        if(type === "search") {
            onChange(type, value);
        }
    }

    const handleFilterChange = (type, value) => {
        onChange(type, value);
        console.log(type, value, "type and value");
    }

    const handleProjectChange = (id) => {
        updateProject(id);
    }


    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => {
        setDescription("");
        setPriority(null);
        setAssigneeId(null);
        setTicketType(null);
        setTicketStatus(null);
        setProjectId(null);
        setOpen(false);
    };

    const handleTicketCreateChange = (type, value) => {
        
        switch(type) {
            case "description": {
                setDescription(value);
                break;
            }
            case "priority": {
                setPriority(value);
                break;
            }
            case "assigneeId": {
                setAssigneeId(value)
                break;
            }
            case "projectId": {
                setProjectId(value);
                break;
            }
            case "status": {
                setTicketStatus(value);
                break;
            }
            case "type": {
                setTicketType(value);
                break;
            }
        }
    }

    const handleSubmit = () => {
        const payload = {};

        if(description) { 
            payload.description = description
        }

        if(ticketStatus) {
            payload.status = ticketStatus;
        }

        if(priority) {
            payload.priority = priority;
        }

        if(assigneeId) {
            payload.assigneeId = assigneeId;
        }

        if(ticketType) {
            payload.type = ticketType;
        }

        if(projectId) {
            payload.projectId = projectId;
        }

        createTicket(payload).then(res => {
            ticketCreationSuccess();
            onClose();
        }).catch(err => {
            ticketCreationError();
        }) //action dispatch


    }

    const { status, type, sortBy, searchStr } = filterAttributes || {};

    return (
        <div className = {styles.ticket_action_bar}>
            {contextHolder}
            <div className = {styles.search}>
                <form className = {styles.form}>
                    <SearchOutlined/>
                    <input placeholder = "Search tickets" name = "search" value = {searchStr} onChange={handleChange} maxLength = "100"/>
                </form>
            </div>
            <div className = {styles.actions}>
                <div className = {styles.statusDropdown}>
                    <TicketStatusDropdown value = {status} onChange = {handleFilterChange} />
                    <TicketTypeDropdown value = {type} onChange = {handleFilterChange}/>
                    <SortByTimeDropdown value = {sortBy} onChange = {handleFilterChange}/>
                    <ProjectListDropdown value = {selectedProject} projectsList = {projectsList} onChange={handleProjectChange}/>
                </div>
            </div>
            <div className = {styles.createBtn}>
                <Button onClick={showDrawer} className = {styles.btn} color="#6042ec" type = "primary" size="large" shape = "circle"><PlusOutlined/></Button>
            </div>
            <Drawer
                title="Create a new ticket"
                width={500}
                onClose={onClose}
                open={open}
                bodyStyle={{
                paddingBottom: 80,
                }}
                extra={
                <Space>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={handleSubmit} type="primary">
                        Submit
                    </Button>
                </Space>
                }
            >
                <Form  layout="vertical" hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="description"
                                label="Subject"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please type the ticket subject',
                                    },
                                ]}
                            >
                                <Input.TextArea  onChange = {(e) => handleTicketCreateChange("description", e.target.value)} rows={2} placeholder="Please type the ticket subject" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="priority"
                                label="Priority"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Please select a priority',
                                    }
                                ]}
                            >
                                <Select onSelect={(value) => handleTicketCreateChange("priority", value)} name = "priority" placeholder="Set ticket priority">
                                    <Option value="urgent">Urgent</Option>
                                    <Option value="high">High</Option>
                                    <Option value="neutral">Neutral</Option>
                                    <Option value="low">Low</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="assignee"
                                label="Choose assignee"
                                rules={[
                                {
                                    required: false,
                                    message: 'Please choose an assignee',
                                },
                                ]}
                            >
                                <Select onSelect={(value) => handleTicketCreateChange("assigneeId", value)} name = "assignee" placeholder="Please choose the type">
                                    {usersList.map(user => {
                                        const {id, name} = user || {};
                                        return <Option value = {id}>{name}</Option>
                                    })}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="projectId"
                                label="Choose project"
                                rules={[
                                {
                                    required: false,
                                    message: 'Please assign a project',
                                },
                                ]}
                            >
                                <Select onSelect={(value) => handleTicketCreateChange("projectId", value)} name = "projectId" placeholder="Please choose the project">
                                    {projectsList.map(project => {
                                        const {id, name} = project || {};
                                        return <Option value = {id}>{name}</Option>
                                    })}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span = {24}>
                            <Form.Item
                                name="type"
                                label="Choose ticket type"
                                rules={[
                                {
                                    required: false,
                                    message: 'Please choose a ticket type',
                                },
                                ]}
                            >
                                <Select onSelect={(value) => handleTicketCreateChange("type", value)} name = "type" placeholder="Please choose the type">
                                    <Option value="feedback">General feedback</Option>
                                    <Option value="bug">Bug report</Option>
                                    <Option value="feature">Feature Request</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span = {24}>
                            <Form.Item
                                name="status"
                                label="Choose the ticket status"
                                rules={[
                                {
                                    required: false,
                                    message: 'Please choose a ticket status',
                                },
                                ]}
                            >
                                <Select onSelect={(value) => handleTicketCreateChange("status", value)} name = "status" placeholder="Please choose the status">
                                    <Option value="open">Open</Option>
                                    <Option value="progress">In Progress</Option>
                                    <Option value="review">Under review</Option>
                                    <Option value="done">Done</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>


              
                </Form>
            </Drawer>

        </div>
    )
}

export default TicketActionBar;