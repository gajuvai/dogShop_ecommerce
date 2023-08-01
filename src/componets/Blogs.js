import React from 'react';
import styled from 'styled-components';
import {blogsData} from '../data.js';

const BlogGridContainer = styled.div`
    margin-top: 20px;
    // text-align: center;
    padding: 120px;
`;

const Title = styled.h3`
  font-size: 45px;
  color: #17224D;
  text-align: center;
`;

const BlogsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 280px;
  height: 350px;
  border: none;
`;

const BlogItem = styled.div`
  padding: 20px;
  // box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  // border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 350px;
  height: 400px;
  top: 4364px;
  left: 91px;
`;

const BlogImage = styled.img`
  border-radius: 16px;
  margin-bottom: 10px;
  width: 350px;
  height: 220px;
  top: 4364px;
  left: 91px;
`;

const BlogTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
`;

const BlogDescription = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  text-align: left;
`;

const ViewDetailsButton = styled.button`
  background-color: #17224D;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
  margin-left: 0;
`;

const Blogs = () => {
  return (
    <BlogGridContainer>

      <Title>Our Blogs</Title>
      
      <BlogsGrid>
      {blogsData.map((blog) => (
        <BlogItem key={blog.id}>
          <BlogImage src={blog.image} alt={blog.title} />
          <BlogTitle>{blog.title}</BlogTitle>
          <BlogDescription>{blog.description}</BlogDescription>
          <ViewDetailsButton>View Details</ViewDetailsButton>
        </BlogItem>
      ))}
      </BlogsGrid>
    </BlogGridContainer>
  );
};

export default Blogs;
