/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSchool = /* GraphQL */ `
  subscription OnCreateSchool {
    onCreateSchool {
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
export const onUpdateSchool = /* GraphQL */ `
  subscription OnUpdateSchool {
    onUpdateSchool {
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
export const onDeleteSchool = /* GraphQL */ `
  subscription OnDeleteSchool {
    onDeleteSchool {
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
export const onCreateSchoolExpert = /* GraphQL */ `
  subscription OnCreateSchoolExpert {
    onCreateSchoolExpert {
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
export const onUpdateSchoolExpert = /* GraphQL */ `
  subscription OnUpdateSchoolExpert {
    onUpdateSchoolExpert {
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
export const onDeleteSchoolExpert = /* GraphQL */ `
  subscription OnDeleteSchoolExpert {
    onDeleteSchoolExpert {
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
export const onCreateMentor = /* GraphQL */ `
  subscription OnCreateMentor {
    onCreateMentor {
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
export const onUpdateMentor = /* GraphQL */ `
  subscription OnUpdateMentor {
    onUpdateMentor {
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
export const onDeleteMentor = /* GraphQL */ `
  subscription OnDeleteMentor {
    onDeleteMentor {
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
