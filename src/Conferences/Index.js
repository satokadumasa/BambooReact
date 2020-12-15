import React from 'react'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { //state初期化
      isLoaded: false,
      confarences: []
    };
  }
  componentDidMount() { //render直後に行いたい処理を書くところ
    fetch("http://localhost:3001/api/confarences/") //api
      .then(res => res.json()) 
      .then(json => {
        this.setState({
          isLoaded: true,
          confarences: json.confarences
        });
      });
  }
  openConference(id) {
    console.log('ConfarenceIndex.openConference() id:', id);
    this.props.history.push('/Conferences/' + id + '/show');
    console.log('ConfarenceIndex.openConference() CH-01');
  }
  render(){
    var { confarences, isLoaded } = this.state;
    return(
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-xl-12">
            <h1>Confarences Index</h1>
          </div>
        </div>
        <div className="row list_outerline">
          <div className="col-1 col-sm-1 col-md-1 col-xl-1 list_header">
            ID
          </div>
          <div className="col-4 col-sm-4 col-md-4 col-xl-4 list_header">
            TITLE
          </div>
          <div className="col-4 col-sm-4 col-md-4 col-xl-4 list_header">
            USERNAME
          </div>
          <div className="col-2 col-sm-2 col-md-2 col-xl-2 list_header">
            CREATED AT
          </div>
          <div className="col-1 col-sm-1 col-md-1 col-xl-1 list_header">
          </div>
        </div>
        {Object.keys(confarences).map(key => (
          <div className="row list_outerline" kye={key.toString}>
            <div className="col-1 col-sm-1 col-md-1 col-xl-1 list_body">
              {confarences[key].confarence.id}
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-xl-4 list_body">
              {confarences[key].confarence.title}
            </div>
            <div className="col-4 col-sm-4 col-md-4 col-xl-4 list_body">
              {confarences[key].user.username}
            </div>
            <div className="col-2 col-sm-2 col-md-2 col-xl-2 list_body">
              {confarences[key].confarence.created_at}
            </div>
            <div className="col-1 col-sm-1 col-md-1 col-xl-1 list_body">
              <button className="btn btn-primary" onClick={() => this.openConference(confarences[key].confarence.id) }>
                Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  }
}


export default Index;