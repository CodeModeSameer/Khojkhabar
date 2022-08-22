import React, { Component } from "react";
// import { useDeferredValue } from "react";
import PropTypes from "prop-types";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";

export class News extends Component {
  static propTypes = {
    country : PropTypes.string,
    pagesize : PropTypes.number,
    category : PropTypes.string
  };
  constructor(){
    super();
  this.state={
    articles :[],
    page : 1,
    loading : false,
  }
  }

 async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=855c9fcbc1ec41b2bb8599689368fe1c&page=1&pagesize=${this.props.pagesize}`
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles:parsedData.articles, 
                   totalResults : parsedData.totalResults,
                   loading:false})
  }

  handleprevclicked= async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=855c9fcbc1ec41b2bb8599689368fe1c&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page : this.state.page-1,
      articles:parsedData.articles,
      loading : false
    })
  }
  handlenextclicked= async ()=>{
    if (Math.ceil(this.state.page+1 > this.state.totalResults/this.props.pagesize)){

    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=855c9fcbc1ec41b2bb8599689368fe1c&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      page : this.state.page+1,
      articles:parsedData.articles,
      loading : false
    })}
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin:'30px 0px', marginTop:'90px'}}>KhojKhabar - Top headlines of a day</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
            <Newsitem title={element.title?element.title.slice(0,30):""} description={element.description?element.description.slice(0,60):""} imageUrl={element.urlToImage} newsUrl = {element.url} date={element.publishedAt} source={element.source.name}/>
          </div>
          })}
          <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handleprevclicked}>&#60; Previous</button>
          <button type="button" disabled={Math.ceil(this.state.page+1 > this.state.totalResults/this.props.pagesize)} className="btn btn-dark" onClick={this.handlenextclicked}>Next &#62;</button>
          </div>
        </div>
      </div>
    );
  } 
}

export default News;
