"use client";

import {
  Close as CloseIcon,
  ContentCopy as ContentCopyIcon,
  DragIndicator,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon,
  Lock as LockIcon,
  LockOpen as LockOpenIcon,
} from "@mui/icons-material";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Input,
  ListSubheader,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TextareaAutosize,
} from "@mui/material";
import { QueryBuilderMaterial } from "@react-querybuilder/material";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Field, QueryBuilder, RuleGroupType } from "react-querybuilder";
import "react-querybuilder/dist/query-builder.css";

const muiComponents = {
  DragIndicator,
  Button,
  Checkbox,
  CloseIcon,
  ContentCopyIcon,
  FormControl,
  FormControlLabel,
  Input,
  KeyboardArrowDownIcon,
  KeyboardArrowUpIcon,
  ListSubheader,
  LockIcon,
  LockOpenIcon,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TextareaAutosize,
};

// See https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#skipping-ssr
export const QB = dynamic(
  () =>
    Promise.resolve(function ({
      fields,
      initialQuery,
    }: {
      fields: Field[];
      initialQuery: RuleGroupType;
    }) {
      const [query, setQuery] = useState(initialQuery);

      return (
        <QueryBuilderMaterial muiComponents={muiComponents}>
          <QueryBuilder
            fields={fields}
            defaultQuery={query}
            onQueryChange={setQuery}
          />
        </QueryBuilderMaterial>
      );
    }),
  { ssr: false }
);
