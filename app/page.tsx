import { QB } from "./QB";
import type { Field, RuleGroupType } from "react-querybuilder";

const fields: Field[] = [
  { name: "firstName", label: "First Name" },
  { name: "lastName", label: "Last Name" },
];

const initialQuery: RuleGroupType = {
  combinator: "and",
  rules: [
    { field: "firstName", operator: "beginsWith", value: "Stev" },
    { field: "lastName", operator: "in", value: "Vai,Vaughan" },
  ],
};

export default function Home() {
  return (
    <main>
      <QB fields={fields} initialQuery={initialQuery} />
    </main>
  );
}
