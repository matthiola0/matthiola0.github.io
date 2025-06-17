import React from 'react';
import PropTypes from 'prop-types';

import Course from './Courses/Course';

// Helper function to sort and map courses to components
const getRows = (courses) => courses
  .sort((a, b) => a.number.localeCompare(b.number)) // Simplified sorting by course number
  .map((course, idx) => (
    <Course
      data={{
        title: course.title,
        number: course.number,
        university: course.university,
      }}
      key={course.title}
      last={idx === courses.length - 1}
    />
  ));

const Courses = ({ data }) => {
  // Define course numbers for each category
  const coreCSNumbers = ['CS 342300', 'CS 235100', 'CS 431100', 'CS 410000', 'CS 471000', 'EECS302002'];
  const softwareSystemsNumbers = ['CS 241002', 'IIS 500200', 'CS 536300', 'CS 135800', 'CS 342400', 'CS 343300'];
  const aiDataScienceNumbers = ['CS 570100', 'CS 460200', 'CS 460100', 'MATH282000', 'STAT521000'];

  // Filter the data into three separate arrays based on course numbers
  const coreCourses = data.filter((c) => coreCSNumbers.includes(c.number));
  const softwareCourses = data.filter((c) => softwareSystemsNumbers.includes(c.number));
  const aiCourses = data.filter((c) => aiDataScienceNumbers.includes(c.number));

  return (
    <div className="courses">
      <div className="link-to" id="courses" />
      <div className="title">
        <h3>Selected Courses</h3>
      </div>

      {/* Render Core CS Foundations Category */}
      <h4 className="course-category">Core CS Foundations</h4>
      <ul className="course-list">{getRows(coreCourses)}</ul>

      {/* Render Software, Systems & Tech Category */}
      <h4 className="course-category">Software, Systems & Advanced Technologies</h4>
      <ul className="course-list">{getRows(softwareCourses)}</ul>

      {/* Render AI & Data Science Category */}
      <h4 className="course-category">AI & Data Science</h4>
      <ul className="course-list">{getRows(aiCourses)}</ul>
    </div>
  );
};

Courses.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      number: PropTypes.string,
      university: PropTypes.string,
    }),
  ),
};

Courses.defaultProps = {
  data: [],
};

export default Courses;
