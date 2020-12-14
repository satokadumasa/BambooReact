import React from 'react'

class Detail extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { //state初期化
      isLoaded: false,
      id: props.match.params.id,
      user: {},
      user_info: {}
    };
    console.log("UserDetail.constructor() id:" + this.state.id);
    this.componentDidMount();
  }
  componentDidMount() { //render直後に行いたい処理を書くところ
    console.log("UserDetail.componentDidMount() id:" + this.state.id);
    fetch("http://localhost:3001/api/users/"+this.state.id+"/show") //api
      .then(res => res.json()) 
      .then(json => {
        this.setState({
          isLoaded: true,
          user: json.user,
          user_info: json.user_info
        });
      });
  }
  render(){
    var { user, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>...Loading</div>;
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-xl-12">
              <h1>Users Detail</h1>
            </div>
          </div>
          <div className="row list_outerline">
            <div className="col-2 col-sm-2 col-md-2 col-xl-2 list_header">
              ID
            </div>
            <div className="col-10 col-sm-10 col-md-10 col-xl-10 list_body">
              {user.id}
            </div>
          </div>
          <div className="row">
            <div className="col-2 col-sm-2 col-md-2 col-xl-2 list_header">
              USERNAME
            </div>
            <div className="col-10 col-sm-10 col-md-10 col-xl-10 list_body">
              {user.username}
            </div>
          </div>
          <div className="row">
            <div className="col-2 col-sm-2 col-md-2 col-xl-2 list_header">
              EMAIL
            </div>
            <div className="col-10 col-sm-10 col-md-10 col-xl-10 list_body">
              {user.email}
            </div>
          </div>
          <div className="row">
            <div className="col-2 col-sm-2 col-md-2 col-xl-2 list_header">
              CREATED AT
            </div>
            <div className="col-10 col-sm-10 col-md-10 col-xl-10 list_body">
              {user.created_at}
            </div>
          </div>
        </div>
      );
    }
  }
}


export default Detail;