import styled from "styled-components";
import { useSlideIntoView } from "../../hooks/useSlideIntoView";
import { useThemeState } from "../../providers/Theme.provider";
import SystemIcons from "../SystemIcons";
import { useEffect, useMemo, useState } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { TbArrowNarrowRight } from "react-icons/tb";
import {
  useGetElementDimensions,
  useGetScrollDimensions,
} from "@busshi/react-hooks";

const CHAR_INTERVAL = 20;
const LINE_INTERVAL = 900;

const Line = ({
  isFinished,
  textDisplayed,
  line,
}: {
  isFinished: boolean;
  textDisplayed: string;
  line: string;
}) => {
  return (
    <LineWrapper>
      <TbArrowNarrowRight
        style={{ marginRight: "0.5rem", color: "var(--git-prompt-arrow)" }}
      />
      <Prompt color="var(--git-prompt-user)" marginRight="0.5rem">
        busshidev
      </Prompt>
      <Prompt color="var(--git-prompt-git)" marginRight="0rem">
        git:(
      </Prompt>
      <Prompt color="var(--git-prompt-branch)" marginRight="0rem">
        main
      </Prompt>
      <Prompt color="var(--git-prompt-git)" marginRight="0.5rem">
        )
      </Prompt>
      <MobilePrompt>~ </MobilePrompt>
      <TextAnimated>
        <div>{textDisplayed}</div>{" "}
        {!isFinished && (
          <Cursor isCursorAnimated={textDisplayed !== line ? false : true} />
        )}
      </TextAnimated>
    </LineWrapper>
  );
};

const GetLine = ({
  isElementVisible,
  line,
  index,
  linesLength,
  isInput,
}: {
  isElementVisible: boolean;
  line: string;
  index: number;
  linesLength: number;
  isInput: boolean;
}) => {
  const [textDisplayed, setTextDisplayed] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const replies = line.split("\\n");
  const [displayedReplies, setDisplayedReplies] = useState<string[]>([
    replies[0],
  ]);

  /**
   * Timeout to add next line
   */
  useEffect(() => {
    if (isInput) return;
    const timeout = setTimeout(() => {
      if (displayedReplies.length < replies.length && isElementVisible)
        setDisplayedReplies([
          ...displayedReplies,
          replies[displayedReplies.length],
        ]);
    }, LINE_INTERVAL / 10);
    return () => {
      clearTimeout(timeout);
    };
  }, [isElementVisible, displayedReplies, isInput, replies]);

  useEffect(() => {
    if (!isInput) return;
    let intervalId: string | number | NodeJS.Timer | undefined;
    if (isElementVisible) {
      intervalId = setInterval(
        () => setTextDisplayed(line.substring(0, textDisplayed.length + 1)),
        CHAR_INTERVAL
      );
    }
    if (textDisplayed === line && index < linesLength - 1) setIsFinished(true);

    return () => {
      intervalId && clearInterval(intervalId);
      if (!isElementVisible && textDisplayed.length === line.length)
        setTextDisplayed("");
    };
  }, [textDisplayed, isElementVisible, index, line, linesLength, isInput]);

  return isInput ? (
    <Line isFinished={isFinished} textDisplayed={textDisplayed} line={line} />
  ) : (
    <div
      style={{
        margin: "0 0 0.3rem 0",
        color: "var(--secondary-dark-font-color)",
      }}
    >
      {displayedReplies.map((line) => (
        <LineBox key={line} margin="0.3rem" mobileMargin="0.1rem">
          {line}
        </LineBox>
      ))}
    </div>
  );
};

const Screen = ({ isElementVisible }: { isElementVisible: boolean }) => {
  const lines = useMemo(
    () => [
      "git add .",
      'git commit -m "ready to deploy"',
      "[main 9347ad1] ready to deploy\\n5 files changed, 81 insertions(+), 33 deletions(-)",
      "git push",
      "Counting objects: 100% (21/21), done\\nEnumerating objects: 21, done.\\nDelta compression using up to 8 threads\\nCompressing objects: 100% (10/10), done.\\nWriting objects: 100% (11/11), 1.51 KiB | 1.51 MiB/s, done.\\nTotal 11 (delta 8), reused 0 (delta 0), pack-reused 0\\nremote: Resolving deltas: 100% (8/8), completed with 8 local objects.\\nTo github.com:busshi/busshidev.git\\n   b391a4..9347ad1  main -> main",
    ],
    []
  );
  const [displayedLines, setDisplayedLines] = useState<string[]>([lines[0]]);
  const [isFinished, setIsFinished] = useState(false);
  const scrollHeight = useGetScrollDimensions("screen-wrapper").height;

  /**
   * Timeout to add next line
   */
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (displayedLines.length < lines.length && isElementVisible)
        setDisplayedLines([...displayedLines, lines[displayedLines.length]]);
      if (displayedLines.length === lines.length) setIsFinished(true);
    }, LINE_INTERVAL);
    return () => {
      clearTimeout(timeout);
    };
  }, [isElementVisible, displayedLines, lines]);

  /**
   * Reset displayed lines on terminal component out of viewport
   */
  useEffect(() => {
    if (!isElementVisible) {
      setDisplayedLines([]);
      setIsFinished(false);
    }
  }, [isElementVisible]);

  /**
   * Scroll to bottom in the terminal
   * */
  useEffect(() => {
    const el = document.getElementById("screen-wrapper");
    el?.scrollTo(scrollHeight, scrollHeight);
  }, [displayedLines, scrollHeight, isFinished]);

  return (
    <ScreenWrapper id="screen-wrapper">
      <div>
        {!displayedLines.length ? (
          <Line isFinished={false} textDisplayed="" line="" />
        ) : (
          <div>
            {displayedLines.map((line, index) => {
              return (
                <LineBox key={line} margin="0.5rem" mobileMargin="0.2rem">
                  <GetLine
                    isElementVisible={isElementVisible}
                    line={line}
                    index={index}
                    linesLength={lines.length}
                    isInput={index === 2 || index === 4 ? false : true}
                  />
                </LineBox>
              );
            })}
            {isFinished && <Line isFinished={false} textDisplayed="" line="" />}
          </div>
        )}
      </div>
    </ScreenWrapper>
  );
};

const ExampleDeploy = () => {
  const [isElementVisible, ref] = useIntersectionObserver<HTMLDivElement>();
  const { theme } = useThemeState();
  const dimensions = useGetElementDimensions("deploy");

  useSlideIntoView(".slideIntoViewRight");

  return (
    <Container id="example-deploy" className="slideIntoViewRight">
      <TerminalWrapper ref={ref} dimensions={dimensions}>
        <Terminal>
          <TopBar
            style={{
              background: theme.cardBackground,
              height: "3rem",
            }}
          >
            <SystemIcons style={{ position: "absolute", left: 0 }} />
            <div>busshidev@laptop:~</div>
          </TopBar>
          <Screen isElementVisible={isElementVisible} />
        </Terminal>
      </TerminalWrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  border-radius: var(--border-radius);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TerminalWrapper = styled.div<{
  dimensions: { width: number; height: number };
}>`
  width: ${(props) => `${props.dimensions.width}px`};
  height: ${(props) => `${props.dimensions.height}px`};

  @media (max-width: 768px) {
    height: ${(props) => `${props.dimensions.height / 2}px`};
  }
`;

const Terminal = styled.div`
  height: 100%;
`;

const TopBar = styled.div`
  border: 1px solid var(--middle-font-color);
  border-bottom: none;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScreenWrapper = styled.div`
  border: 1px solid var(--middle-font-color);
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  background: black;
  text-align: left;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  color: white;
  height: 80%;

  @media (max-width: 768px) {
    height: 200px;
    font-size: 0.8rem;
  }
`;

const Cursor = styled.div<{ isCursorAnimated: boolean }>`
  width: 0.5rem;
  height: 1.1rem;
  background: gray;
  display: flex;

  animation: ${(props) => (props.isCursorAnimated ? "cursor 1s 5" : "none")};

  @keyframes cursor {
    from {
      background-color: var(--middle-font-color);
    }
    50% {
      background-color: black;
    }
    to {
      background-color: var(--middle-font-color);
    }
  }
`;

const LineWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  height: 1.1rem;
  padding-bottom: 0.2rem;

  color: var(--secondary-dark-font-color);
`;

const Prompt = styled.div<{ color: string; marginRight: string }>`
  margin-right: ${(props) => props.marginRight};
  display: flex;
  align-items: flex-end;
  height: 1.1rem;

  color: ${(props) => props.color};
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobilePrompt = styled.div`
  color: var(--git-prompt-user);
  margin-right: 0.8rem;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    align-items: flex-end;
  }
`;

const TextAnimated = styled.div`
  display: flex;
  align-items: flex-end;
`;

const LineBox = styled.div<{ margin: string; mobileMargin: string }>`
  margin-bottom: ${(props) => props.margin};
  @media (max-width: 768px) {
    margin-bottom: ${(props) => props.mobileMargin};
  }
`;

export default ExampleDeploy;
