'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import project_data from '@/data/ProjectData';

const ProjectArea = () => {

  const projects = project_data.filter(items => items.page === "project_1")
  
  const itemsPerPage = 6;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = projects.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(projects.length / itemsPerPage);
  // click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % projects.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <section className="project-area tp-project-3-bg pt-120 pb-120">
        <div className="container">
          <div className="row">
            {currentItems.map((item, i) =>
              <div key={i} className="col-lg-4 col-md-6">
                <div className="tp-project-3-item mb-30 tp-thumb-common fix wow fadeInRight" data-wow-duration="1.2s" data-wow-delay=".6s">
                  <div className="tp-project-3-thumb">
                    <div className="tp-thumb-common-overlay wow"></div>
                    <Image src={item.img} style={{width: '100%', height: 'auto'}} alt="image-title" />
                  </div>
                  <div className="tp-project-3-info d-flex justify-content-between align-items-center">
                    <div className="tp-project-3-content">
                      <span>{item.tag}</span>
                      <h4 className="tp-project-3-title under-line-white">
                        <Link href="/project-details">{item.title}</Link>
                      </h4>
                    </div>
                    <div className="tp-project-3-icon">
                      <a href="#"><i className="fa-regular fa-arrow-right"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            )} 
          </div>

          <div className="row">
            <div className="col-12">
              <div className="basic-pagination text-center mt-30">
              <ReactPaginate
                  breakLabel="..."
                  nextLabel= {<i className="fa-light fa-arrow-right-long"></i>}
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={9}
                  pageCount={pageCount}
                  previousLabel={<i className="fa-light fa-arrow-left-long"></i>}
                  renderOnZeroPageCount={null}
                /> 
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default ProjectArea;