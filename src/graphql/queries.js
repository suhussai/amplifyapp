/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSchool = /* GraphQL */ `
  query GetSchool($id: ID!) {
    getSchool(id: $id) {
      id
      name
      mentors {
        items {
          id
          schoolId
          mentorId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSchools = /* GraphQL */ `
  query ListSchools(
    $filter: ModelSchoolFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSchools(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        mentors {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMentor = /* GraphQL */ `
  query GetMentor($id: ID!) {
    getMentor(id: $id) {
      id
      name
      avgRating
      schools {
        items {
          id
          schoolId
          mentorId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listMentors = /* GraphQL */ `
  query ListMentors(
    $filter: ModelMentorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMentors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        avgRating
        schools {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
