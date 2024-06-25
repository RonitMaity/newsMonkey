import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export class News extends Component {
    
    static defaultProptype = {
        category : 'general'
    }

    static propTypes = {
        category : PropTypes.string
    }
  constructor(){
    super();
    this.state = {
        articles : [],
        page : 1,
        totalArticles : 0,
        loading : true
    }
}

async componentDidMount(){
    this.makeAPiCall();
}

async makeAPiCall(){
    this.state.loading = true;
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=de6735f936e04444998a407a55684e9f&page=${this.state.page}&pagesize=10`;
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({articles : parsedData.articles , totalArticles : parsedData.totalResults , loading:false })
}

handlePreviousClick = async () => {
    this.setState({page : this.state.page - 1})
    this.makeAPiCall();
}

handleNextClick = async () =>{
    this.setState({page : this.state.page + 1})
    this.makeAPiCall();
}

  render() {
    return (
        <div className='container my-3'>
        <h2>Top {this.props.category}</h2>
        {this.state.loading && <Spinner/>}
        {!this.state.loading && <div className='row'>   
            {this.state.articles?.map((element) =>{
                return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title?.slice(0,20)} description = {element.description?.slice(0,40)} imageUrl={!element.urlToImage ?"https://s.yimg.com/ny/api/res/1.2/APmNatbOT7Ud03AEXlUMsg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-06/6d2d9070-2b52-11ef-a7ff-07085b1db9a8" : element.urlToImage} newsUrl = {element.url}/>
                </div>
            })}
            
        </div>}
        <div className='container d-flex justify-content-around'>
        <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePreviousClick}>Previous</button>
        <button type="button" className="btn btn-primary" disabled={this.state.page > this.state.totalArticles / 10 }  onClick={this.handleNextClick}>Next</button>
        </div>
        </ div>
    )
  }
}

export default News