import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import './App.css';
import axios from 'axios';
import './config';

class TrData extends Component{
    render(){
        return (
            this.props.users.map((user,i)=>{
                return (
                    <tr key={user.id} className="text-center">
                        <td>{user.id}</td>
                        <td>{user.title}</td>
                        <td>{user.name}</td>
                        <td>{user.sex}</td>
                    </tr>
                )
            })
        )
    }
}

const Page = ({ title }) => (
    <div className="App">
        <div className="App-header">
            <h2>{title}</h2>
        </div>
        <p className="App-intro">
            This is the {title} page.
        </p>
        <p>
            <Link to="/">Home</Link>
        </p>
        <p>
            <Link to="/about">About</Link>
        </p>
        <p>
            <Link to="/settings">Settings</Link>
        </p>
    </div>
);

const Home = (props) => (
    <div>
        首页页面这里写
        <a href="tel:17758023364">17758023364</a>
        <Page title="Home"/>
    </div>
);

const About = (props) => (
    <div>
        about页面这里写
        <Page title="About"/>
    </div>
);

const Settings = (props) => (
    <div>
        set页面这里写
        <Page title="Settings"/>
    </div>
);

class List extends Component {
    constructor(props){
        super(props);
        this.state={
            users:[],
            isLoaded:false
        }
    }

    //当组件输出到 DOM 后会执行 componentDidMount()
    componentDidMount(){
        const _this=this;    //先存一下this，以防使用箭头函数this会指向我们不希望它所指向的对象。
        axios.get(global.frApi.lists)
        .then(function (response) {
            _this.setState({
                users:response.data,
                isLoaded:true
            });
        })
        .catch(function (error) {
            console.log(error);
            _this.setState({
                isLoaded:false,
                error:error
            })
        })
    }

   render() {
       if (!this.state.isLoaded) {
           return (
               <div>Loading</div>
           );
       } else {
           return (
               <table className="table table-bordered">
                   <thead>
                   <tr>
                       <th className="text-center">ID</th>
                       <th className="text-center">姓名</th>
                       <th className="text-center">年龄</th>
                       <th className="text-center">性别</th>
                   </tr>
                   </thead>
                   <tbody>
                   <TrData users={this.state.users}/>
                   </tbody>
               </table>
           );
       }
   }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={browserHistory}>
                    <Route path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/settings" component={Settings}/>
                </Router>
                <List />
            </div>
        );
    }
}

export default App;
