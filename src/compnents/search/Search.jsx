import React from "react";

import "./../search/Serach.scss";

import search from "./../../../public/search-icon.png";
import img1 from "./../../../public/profile-page-img1.png";
import img2 from "./../../../public/profile-page-img2.png";
import img3 from "./../../../public/profile-page-img3.png";
import img4 from "./../../../public/profile-page-img4.png";
import img5 from "./../../../public/profile-page-img5.png";
import img6 from "./../../../public/profile-page-img6.png";
import profile1 from "./../../../public/avatar-1.png";
import profile2 from "./../../../public/avatar-2.png";
import settings from "./../../../public/settings-icon.png";
import vector from "./../../../public/vector.png";

export default function Search() {
  return (
    <div className="profile-search">
      <form className="profile-search__form">
        <img className="search" src={search} alt="search" />
        <input
          className="profile-search__input"
          placeholder="Search Twitter"
          type="search"
        />
      </form>
      <div className="profile-search-imgs">
        <img src={img1} alt="img" />
        <img src={img2} alt="img" />
        <img src={img3} alt="img" />
        <div>
          <img src={img4} alt="img" />
          <img src={img5} alt="img" />
          <img src={img6} alt="img" />
        </div>
      </div>

      <div className="profile-search__follow">
        <h1 className="title">You might like</h1>
        <div className="follow-wrap">
          <img className="profile-img" src={profile1} alt="profile-img" />
          <span className="follow-wrap__nik">
            <h4>Mushtariy</h4>
            <h4>@Mushtar565266</h4>
          </span>
          <button className="btn-follow">Follow</button>
        </div>
        <div className="follow-wrap">
          <img className="profile-img" src={profile2} alt="profile-img" />
          <span className="follow-wrap__nik">
            <h4>Shuhratbek</h4>
            <h4>@mrshukhrat </h4>
          </span>
          <button className="btn-follow">Follow</button>
        </div>
        <h3 className="last-word">Show more</h3>
      </div>

      <div className="profile-search__follow">
        <span className="trend__title">
          <h1 className="title">Trends for you</h1>
          <img src={settings} alt="settings-icon" />
        </span>
        <div className="trend__wrap">
          <div className="trend__wrap-inner">
            <h4 className="trend__wrap-inner-word">Trending in Germany</h4>
            <h4 className="trend__wrap-inner-text">Revolution</h4>
            <h4 className="trend__wrap-inner-word">50.4K Tweets</h4>
          </div>
          <img src={vector} alt="..." />
        </div>
        <div className="trend__wrap">
          <div className="trend__wrap-inner">
            <h4 className="trend__wrap-inner-word">Trending in Germany</h4>
            <h4 className="trend__wrap-inner-text">Revolution</h4>
            <h4 className="trend__wrap-inner-word">50.4K Tweets</h4>
          </div>
          <img src={vector} alt="..." />
        </div>
        <div className="trend__wrap">
          <div className="trend__wrap-inner">
            <h4 className="trend__wrap-inner-word">Trending in Germany</h4>
            <h4 className="trend__wrap-inner-text">Revolution</h4>
            <h4 className="trend__wrap-inner-word">50.4K Tweets</h4>
          </div>
          <img src={vector} alt="..." />
        </div>
        <h3 className="last-word">Show more</h3>
      </div>
    </div>
  );
}
