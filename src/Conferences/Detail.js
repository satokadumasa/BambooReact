import React from 'react'

class Detail extends React.Component {
  constructor(props) {
    super(props);
    console.log("ConferenceDetail.constructor() props:" + props);
    this.state = { //state初期化
      isLoaded: false,
      id: props.match.params.id,
      confarence: {},
      user: {},
      user_info: {}
    };
    console.log("ConferenceDetail.constructor() id:" + this.state.id);
    this.componentDidMount();
  }
  componentDidMount() { //render直後に行いたい処理を書くところ
    console.log("ConferenceDetail.componentDidMount() id:" + this.state.id);
    fetch("http://localhost:3001/api/confarences/"+this.state.id+"/show") //api
      .then(res => res.json()) 
      .then(json => {
        console.log("ConferenceDetail.componentDidMount() id:" + json);
        this.setState({
          isLoaded: true,
          confarence: json.confarence,
          user: json.user,
          user_info: json.user_info
        });
      });
  }
  render(){
    var { confarence, user, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>...Loading</div>;
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-xl-12">
              <h1>Conferences Detail</h1>
            </div>
          </div>
          <div className="row list_outerline">
            <div className="col-2 col-sm-2 col-md-2 col-xl-2 list_header">
              ID
            </div>
            <div className="col-10 col-sm-10 col-md-10 col-xl-10 list_body">
              {confarence.id}
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
              TITLE
            </div>
            <div className="col-10 col-sm-10 col-md-10 col-xl-10 list_body">
              {confarence.title}
            </div>
          </div>
          <div className="row">
            <div className="col-2 col-sm-2 col-md-2 col-xl-2 list_header">
              CREATED AT
            </div>
            <div className="col-10 col-sm-10 col-md-10 col-xl-10 list_body">
              {confarence.created_at}
            </div>
            <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-xl-12 list_body document_body">
              {confarence.body}
            </div>
          </div>
          </div>
        </div>
      );
    }
  }
}


export default Detail;