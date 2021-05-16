/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSchool = /* GraphQL */ `
  mutation CreateSchool(
    $input: CreateSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    createSchool(input: $input, condition: $condition) {
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
export const updateSchool = /* GraphQL */ `
  mutation UpdateSchool(
    $input: UpdateSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    updateSchool(input: $input, condition: $condition) {
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
export const deleteSchool = /* GraphQL */ `
  mutation DeleteSchool(
    $input: DeleteSchoolInput!
    $condition: ModelSchoolConditionInput
  ) {
    deleteSchool(input: $input, condition: $condition) {
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
export const createSchoolExpert = /* GraphQL */ `
  mutation CreateSchoolExpert(
    $input: CreateSchoolExpertInput!
    $condition: ModelSchoolExpertConditionInput
  ) {
    createSchoolExpert(input: $input, condition: $condition) {
      id
      schoolId
      mentorId
      school {
        id
        name
        mentors {
          nextToken
        }
        createdAt
        updatedAt
      }
      mentor {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateSchoolExpert = /* GraphQL */ `
  mutation UpdateSchoolExpert(
    $input: UpdateSchoolExpertInput!
    $condition: ModelSchoolExpertConditionInput
  ) {
    updateSchoolExpert(input: $input, condition: $condition) {
      id
      schoolId
      mentorId
      school {
        id
        name
        mentors {
          nextToken
        }
        createdAt
        updatedAt
      }
      mentor {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteSchoolExpert = /* GraphQL */ `
  mutation DeleteSchoolExpert(
    $input: DeleteSchoolExpertInput!
    $condition: ModelSchoolExpertConditionInput
  ) {
    deleteSchoolExpert(input: $input, condition: $condition) {
      id
      schoolId
      mentorId
      school {
        id
        name
        mentors {
          nextToken
        }
        createdAt
        updatedAt
      }
      mentor {
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
      createdAt
      updatedAt
    }
  }
`;
export const createMentor = /* GraphQL */ `
  mutation CreateMentor(
    $input: CreateMentorInput!
    $condition: ModelMentorConditionInput
  ) {
    createMentor(input: $input, condition: $condition) {
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
export const updateMentor = /* GraphQL */ `
  mutation UpdateMentor(
    $input: UpdateMentorInput!
    $condition: ModelMentorConditionInput
  ) {
    updateMentor(input: $input, condition: $condition) {
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
export const deleteMentor = /* GraphQL */ `
  mutation DeleteMentor(
    $input: DeleteMentorInput!
    $condition: ModelMentorConditionInput
  ) {
    deleteMentor(input: $input, condition: $condition) {
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
