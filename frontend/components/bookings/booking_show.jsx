import React from 'react';
import { withRouter, Link } from 'react-router-dom';


class BookingShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { sitter_id, user_id, start_date, end_date } = this.props.booking;
    debugger
    return (
      <div>
        <div>{this.props.sitters[sitter_id-1].sittername}
        </div>
        <div>{start_date}
        </div>
        <div>{end_date}
        </div>
      </div>
        // <Link to={`sitters/${sitter_id}`} className="sitter-item-link">
        //   <div className="sitter-card">
        //     <div className="profile-pic-box-sitter">
        //       <img className="profile-pic-index"
        //       src={this.props.sitter.image_thumb}
        //       />
        //     </div>
        //
        //     <div className="index-item-info">
        //       <div className="list-num">
        //         {this.props.num + 1}.
        //       </div>
        //
        //       <div className="index-item-name">
        //         { sittername }
        //       </div>
        //
        //       <div className="index-item-rate">
        //         <div className="text-muted-index">
        //           from
        //         </div>
        //         <div className="rate">
        //           ${ rates }
        //         </div>
        //         <div className="text-muted-index">
        //           per night
        //         </div>
        //       </div>
        //
        //       <div className="index-item-address">
        //         { location }
        //       </div>
        //
        //       <div className="index-item-description">
        //         { description || ""}
        //       </div>
        //     </div>
        //   </div>
        // </Link>

    );
  }
}

export default BookingShow;
