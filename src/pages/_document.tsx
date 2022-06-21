import { createGetInitialProps } from "@mantine/next";
import Document from "next/document";

const getInitialProps = createGetInitialProps();

export default class MyDocument extends Document {
  static getInitialProps = getInitialProps;
}
