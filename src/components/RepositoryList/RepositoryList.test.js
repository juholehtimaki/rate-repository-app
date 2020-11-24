import { RepositoryListContainer } from "./index";
import { render } from "@testing-library/react-native";
import React from "react";
import * as R from "ramda";
// eslint-disable-next-line no-undef
const { numberFormatter } = require("./RepositoryItem");

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };

      const { getAllByTestId } = render(
        <RepositoryListContainer
          repositories={repositories.edges.map(({ node }) => node)}
        />
      );

      // Practicing ramda -> not too readable but will leave it like this :)
      /*
      [
        {
          id: 'jaredpalmer.formik',
          fullName: 'jaredpalmer/formik',
          description: 'Build forms in React, without the tears',
          language: 'TypeScript',
          forksCount: 1619,
          stargazersCount: 21856,
          ratingAverage: 88,
          reviewCount: 3,
          ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4'
        },
        {
          id: 'async-library.react-async',
          fullName: 'async-library/react-async',
          description: 'Flexible promise-based React data loader',
          language: 'JavaScript',
          forksCount: 69,
          stargazersCount: 1760,
          ratingAverage: 72,
          reviewCount: 3,
          ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/54310907?v=4'
        }
      ]
       */
      const mockRepos = R.map(({ node }) => ({ ...node }))(
        R.pipe(R.pick(["edges"]), R.values, R.flatten)(repositories)
      );

      const fullNames = getAllByTestId("fullName");
      const descriptions = getAllByTestId("description");
      const languages = getAllByTestId("language");
      const forkCounts = getAllByTestId("forksCount");
      const stargazersCounts = getAllByTestId("stargazersCount");
      const averageRatings = getAllByTestId("ratingAverage");
      const reviewCounts = getAllByTestId("reviewCount");

      for (let i = 0; i < 2; ++i) {
        expect(fullNames[i]).toHaveTextContent(mockRepos[i].fullName);
        expect(descriptions[i]).toHaveTextContent(mockRepos[i].description);
        expect(languages[i]).toHaveTextContent(mockRepos[i].language);
        expect(forkCounts[i]).toHaveTextContent(
          numberFormatter(mockRepos[i].forksCount)
        );
        expect(stargazersCounts[i]).toHaveTextContent(
          numberFormatter(mockRepos[i].stargazersCount)
        );
        expect(averageRatings[i]).toHaveTextContent(
          numberFormatter(mockRepos[i].ratingAverage)
        );
        expect(reviewCounts[i]).toHaveTextContent(
          numberFormatter(mockRepos[i].reviewCount)
        );
      }
    });
  });
});
