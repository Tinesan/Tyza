import React from "react";
import styled from "styled-components";
import { colors } from "ui/colors";
import { RefReturn } from "./OrderForm";

type Props = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  register: () => RefReturn;
};

const TextareaWrapper = styled.div`
  display: flex;

  textarea {
    width: 100%;
    border: 1px solid;
    border-color: ${colors.silk};
    transition-duration: 0.3s;
    border-radius: 15px;
    background-color: transparent;
    outline: none;
    padding: 3px 15px;
    transition-duration: 0.3s;
    color: ${colors.coffee};

    &:focus {
      outline: none;
      box-shadow: 0 0 5px ${colors.silk};
    }
  }
`;

const Textarea = ({ register, ...textAreaProps }: Props) => {
  return (
    <TextareaWrapper>
      <textarea {...textAreaProps} ref={register} />
    </TextareaWrapper>
  );
};

export default Textarea;
