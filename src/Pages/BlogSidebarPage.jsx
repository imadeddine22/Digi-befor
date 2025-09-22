import React from 'react';
import BreadCumb from '../Components/Common/BreadCumb';
import BlogSidebar from '../Components/BlogSidebar/BlogSidebar';

const BlogSidebarPage = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/page_header.jpg"
                Title="Blog Sidebar"
            ></BreadCumb>    
            <BlogSidebar></BlogSidebar>       
        </div>
    );
};

export default BlogSidebarPage;