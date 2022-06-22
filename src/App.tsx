import { gql, useQuery } from "@apollo/client"

function App() {

  const { data } = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY);
  
  return (
    <ul>
      { data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>  
  )
}

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`
interface Lesson {
  id: string;
  title: string;
}

export default App
