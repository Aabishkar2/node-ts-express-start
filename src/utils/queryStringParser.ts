import qs from "query-string";

export default function (str): qs.ParsedQuery<string | number | boolean> {
  return qs.parse(str, {
    parseBooleans: true,
    arrayFormat: "bracket",
    parseNumbers: true,
  });
}
