import React from 'react'

import MainContent from '../common/MainContent'
import ProjectList from '../projects/ConnectedProjectList'

const Counter = ({ count }) => {
  if (count === 0) return null
  return (
    <span
      className="counter"
      style={{ color: '#999', fontSize: '1rem', marginLeft: '.25rem' }}
    >
      {count === 1 ? ' (one project)' : ` (${count} projects)`}
    </span>
  )
}

const EmptyList = ({ isLoggedin }) =>
  <div style={{ border: '2px dashed #fa9e59', padding: '2rem' }}>
    {isLoggedin
      ? <div>
          <p>
            {"You don't have bookmarked any project."}
          </p>
          <p>
            Add projects you want to follow by using the `ADD BOOKMARK` button.
          </p>
        </div>
      : <span>Please sign-in to access this feature!</span>}
  </div>

const MyProjectsPage = ({ projects, ui, isLoggedin }) => {
  // const showStars =
  //   ui.starFilter === 'total' ||
  //   ui.starFilter === 'packagequality' ||
  //   ui.starFilter === 'npms'
  return (
    <MainContent>
      <h3 className="no-card-container">
        <span
          className={'icon mega-octicon octicon-bookmark'}
          style={{ marginRight: '.25rem' }}
        />{' '}
        Bookmarked projects
        <Counter count={projects.length} />
      </h3>
      {projects.length === 0 && <EmptyList isLoggedin={isLoggedin} />}
      {projects.length > 0 &&
        <ProjectList
          projects={projects}
          isLoggedin={isLoggedin}
          viewOptions={ui.viewOptions}
          showStars={true}
          showDelta={false}
          deltaFilter="daily"
        />}
    </MainContent>
  )
}

export default MyProjectsPage
