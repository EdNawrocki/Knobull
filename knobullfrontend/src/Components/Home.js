import React from 'react';
import '../Home.css';
import StudentCard from './StudentCard';
import ListMediaObjects from './ListMediaObjects';
import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
    height: 400,
    border: "1px solid green",
    margin: 6,
    padding: 8
};

class Home extends React.Component {
    state = {
        items: Array.from({ length: 20 }),
        hasMore: true
    };

    fetchMoreData = () => {
        if (this.state.items.length >= 500) {
            this.setState({ hasMore: false });
            return;
        }
        // a fake async api call like which sends
        // 20 more records in .5 secs
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(Array.from({ length: 20 }))
            });
        }, 500);
    };

    render() {
        return (
            <div>
                <div className="container App">  {/* use container from Bootstrap */}
                    <h1 class="display-4">Student News</h1>
                    <hr></hr>

                    <div className="row">
                        <div className="col-8">
                            <StudentCard></StudentCard>
                            <hr></hr>
                            <h2>The Latest</h2>

                            <InfiniteScroll
                                dataLength={this.state.items.length}
                                next={this.fetchMoreData}
                                hasMore={this.state.hasMore}
                                loader={<h4>Loading...</h4>}
                                height={1000}
                                endMessage={
                                    <p style={{ textAlign: "center" }}>
                                        <b>Yay! You have seen it all</b>
                                    </p>
                                }
                            >
                                <ListMediaObjects />
                                {this.state.items.map((i, index) => (
                                    <div key={index}>
                                        <ListMediaObjects />
                                    </div>
                                ))}
                            </InfiniteScroll>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;