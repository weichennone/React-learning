import React, {Component} from 'react';
import Tasks from '../../components/Tasks/Tasks';
// import AddTask from '../../components/Tasks/AddTask/AddTask';
import AddTaskDialog from '../../components/Tasks/AddTask/AddTaskDialog/AddTaskDialog';
import Model from '../../components/UI/Model/Model';
import History from '../../components/History/History';
import Stats from '../../components/Stats/Stats';

class TaskDisplayer extends Component {
    state = {
        activeTask: {
            1: ["LeetCode 334,662,452", true],
            2: ["ECML presentation", false],
            3: ["Update Todo with time tracking", false]
        },
        doneTask: [
            "wow",
            "wow again",
            "yoo"
        ],
        id: 4,
        adding: false,
        addingTask: "",
        showHistory: false,
        history: {
            "20200613": ["Test set05-06", "Make slides"],
            "20200621": ["Unassign task"],
            "20200630": ["Highlight scheduled task", "Progress bar", "Arrange tasks according to deadline"],
        },
        showStats: false,
        stats: {
            "20200613": [58338, 17215, 6431, 3916],
            "20200621": [43200, 8000, 35200, 0],
            "20200630": [49313, 28761, 5561, 2765],
        }
    }

    switchTaskHandler = (key) => {
        const updatedActiveTask = {
            ...this.state.activeTask
        };
        updatedActiveTask[key][1] = !updatedActiveTask[key][1];
        this.setState({activeTask: updatedActiveTask});
    }

    finishTaskHandler = (key) => {
        const updatedActiveTask = {
            ...this.state.activeTask
        };
        if (updatedActiveTask.hasOwnProperty(key)) {
            // console.log(updatedActiveTask, key);
            delete updatedActiveTask[key];
            // delete this.state.activeTask[key];
            // console.log(updatedActiveTask, updatedActiveTask.hasOwnProperty(key));
        }
        this.setState({activeTask: updatedActiveTask});
        // not update immediately, need to check
        // console.log(updatedActiveTask, this.state.activeTask);
    }

    addTaskOngoingHandler = () => {
        this.setState({adding: true});
    }

    addTaskHandler = () => {
        const name = this.state.addingTask;
        if (name !== "") {
            const newActiveTask = {
                ...this.state.activeTask
            };
            const currentID = this.state.id;
            newActiveTask[currentID] = [name, false];
            // console.log(newActiveTask);
            const newID = currentID + 1;
            this.setState({
                activeTask: newActiveTask, 
                id: newID, 
                adding: false,
                addingTask: ""
            });
        }
        
    }

    addTaskCancelHandler = () => {
        this.setState({adding: false, addingTask: ""});
    }

    updateAddingTaskHandler = (event) => {
        this.setState({addingTask: event.target.value});
    }

    render () {
        return (
            <div>
                <Model show={this.state.adding}>
                    <AddTaskDialog 
                        defaultTask={this.state.addingTask}
                        changed={this.updateAddingTaskHandler}
                        addCanceled={this.addTaskCancelHandler}
                        addContinue={this.addTaskHandler}/>
                </Model>

                <Model show={this.state.showHistory}>
                    <History />
                </Model>

                <Model show={this.state.showStats}>
                    <Stats />
                </Model>

                <Tasks 
                    tasknames={this.state.activeTask}
                    clicked={this.switchTaskHandler}
                    doneClicked={this.finishTaskHandler}
                    addClicked={this.addTaskOngoingHandler}/>
                {/* <AddTask clicked={this.addTaskOngoingHandler}/> */}
            </div>
        );
    }
}

export default TaskDisplayer;