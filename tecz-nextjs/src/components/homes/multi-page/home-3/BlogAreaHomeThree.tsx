
import blog_data from '@/data/BlogData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const blog_content = {
  sub_title: "Our Latest Update",
  title: "Check Our Inside Story ",
}
const { sub_title, title } = blog_content

const BlogAreaHomeThree = ({onPageStyle} : any) => {
  const blogs = blog_data.filter((blog) => blog.page === "home_3")
  return (
    <> 
      <section id="blog-one-page" className={`blog-area pb-40 ${onPageStyle? "pt-60" : ""}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-blog-3-wrapper">
                <div className="tp-section tp-section-two text-center mb-50">
                  <span className="tp-section-sub-title">{sub_title}</span>
                  <h4 className="tp-section-title">{title}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {blogs.map((item, i) =>
              <div key={i} className="col-lg-4 col-md-6">
                <div className="tp-blog-two mb-40">
                  <div className="tp-blog-two-item">
                    <div className="tp-blog-two-thumb overlay-anim tp-thumb-common fix">
                      <div className="tp-thumb-common-overlay wow"></div>
                      <Link href="/blog-details">
                        <Image src={item.img} style={{width: "100%", height: 'auto'}} alt="image-title" />
                        <div className="tp-blog-two-thumb-plus">
                          <i className="fa-regular fa-plus"></i>
                        </div>
                      </Link>
                    </div>
                    <div className="tp-blog-two-content">
                      <span>{item.time} _ {item.category}</span>
                      <h4 className="tp-blog-two-title">
                        <Link href="/blog-details">{item.title}</Link>
                      </h4>
                      <div className="tp-blog-two-btn">
                        <Link href="/blog-details">Read More</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )} 
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogAreaHomeThree;