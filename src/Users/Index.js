import React from 'react'
import { Link } from 'react-router-dom'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { //state初期化
      isLoaded: false,
      users: []
    };
    this.openUser = this.openUser.bind(this);
  }
  componentDidMount() { //render直後に行いたい処理を書くところ
    fetch("http://localhost:3001/api/users/") //api
      .then(res => res.json()) 
      .then(json => {
        this.setState({
          isLoaded: true,
          users: json.users
        });
      });
  }
  openUser(id) {
    console.log('UsersIndex.openUser() id:', id);
    this.props.history.push('/Users/' + id + '/show');
    console.log('UsersIndex.openUser() CH-01:');
  }
  render(){
    var { users, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>...Loading</div>;
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-xl-12">
              <h1>Users Index</h1>
            </div>
          </div>
          <div className="row list_outerline">
            <div className="col-1 col-sm-1 col-md-1 col-xl-1 list_header">
              ID
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-xl-4 list_header">
              USERNAME
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-xl-4 list_header">
              EMAIL
            </div>
            <div className="col-3 col-sm-3 col-md-3 col-xl-3 list_header">
              CREATED AT
            </div>
          </div>
          {Object.keys(users).map(key => (
            <div className="row list_outerline" kye={key.toString}>
              <div className="col-1 col-sm-1 col-md-1 col-xl-1 list_body">
                {users[key].user.id}
              </div>
              <div className="col-4 col-sm-4 col-md-4 col-xl-4 list_body">
                {users[key].user.username}
              </div>
              <div className="col-4 col-sm-4 col-md-4 col-xl-4 list_body">
                {users[key].user.email}
              </div>
              <div className="col-2 col-sm-2 col-md-2 col-xl-2 list_body">
                {users[key].user.created_at}
              </div>
              <div className="col-1 col-sm-1 col-md-1 col-xl-1 list_body">
                <button className="btn btn-primary" onClick={() => this.openUser(users[key].user.id) }>
                  Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}


export default Index;