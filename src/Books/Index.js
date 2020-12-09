import React from 'react'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { //state初期化
      isLoaded: false,
      users: []
    };
  }
  componentDidMount() { //render直後に行いたい処理を書くところ
    fetch("http://localhost:3001/api/books/") //api
      .then(res => res.json()) 
      .then(json => {
        this.setState({
          isLoaded: true,
          books: json.books
        });
      });
  }
  render(){
    var { books, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>...Loading</div>;
    } else {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-xl-12">
              <h1>Books Index</h1>
            </div>
          </div>
          <div className="row list_outerline">
            <div className="col-1 col-sm-1 col-md-1 col-xl-1 list_header">
              ID
            </div>
            <div className="col-5 col-sm-5 col-md-5 col-xl-5 list_header">
              TITLE
            </div>
            <div className="col-3 col-sm-3 col-md-3 col-xl-3 list_header">
              AUHTOR
            </div>
            <div className="col-3 col-sm-3 col-md-3 col-xl-3 list_header">
              CREATED AT
            </div>
          </div>
          {Object.keys(books).map(key => (
            <div className="row list_outerline" kye={key.toString}>
              <div className="col-1 col-sm-1 col-md-1 col-xl-1 list_body">
                {books[key].book.id}
              </div>
              <div className="col-5 col-sm-5 col-md-5 col-xl-5 list_body">
                {books[key].book.title}
              </div>
              <div className="col-3 col-sm-3 col-md-3 col-xl-3 list_body">
                {books[key].user_info.first_name} {books[key].user_info.last_name}
              </div>
              <div className="col-3 col-sm-3 col-md-3 col-xl-3 list_body">
                {books[key].book.created_at}
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}


export default Index;