import React, { useEffect, useLayoutEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // document.title = `${this.capitalizaFirstLetter(props.category)} - NewsMonkey`;

  const capitalizaFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }




  const updateNews = async () => {
    props.setProgress(10);

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false)

    props.setProgress(100);

  }
  useEffect(() => {
    updateNews();
  }, [])


  // async componentDidMount() {


  //   // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=70c1dc585867487988f0f978f2f99020&page=1&pageSize=${props.pageSize}`;
  //   // this.setState({ loading: true });



  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   // console.log(parsedData);
  //   // this.setState({
  //   //   articles: parsedData.articles,

  //   //   totalResults: parsedData.totalResults,
  //   //   loading: false
  //   // })
  //   this.updateNews();

  // }

  const handlePreviousClick = async () => {
    console.log("previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=70c1dc585867487988f0f978f2f99020&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // // this.setState({articles: parsedData.articles})
    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false
    // })
    setPage(page - 1);
    updateNews();

  }

  const handleNextClick = async () => {
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize))) {




    //   console.log("next");

    //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=70c1dc585867487988f0f978f2f99020&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   // this.setState({loading:false});
    //   // this.setState({articles: parsedData.articles})
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false
    //   })
    // }
    setPage(page + 1);
    updateNews();

  }
  const fetchMoreData = async () => {

    


    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    // this.setState({ loading: true });
setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults)

  };

  return (
    <>
      <h1 className="text-center " style={{ margin: '35px 0px', marginTop: '90px' }}>QuickCrisp - Top {capitalizaFirstLetter(props.category)} Headlines   </h1>
      {loading && <Spinner />}


      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >



        <div className="container">



          <div className="row">

            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem

                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={element.description ? element.description.slice(0, 88) : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>

      {/* 
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
    </>
  );

}

News.defaultProps = {
  country: 'in',
  pageSize: 5,
  category: 'general'

}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News;
