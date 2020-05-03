import React from 'react';
import Highlight, {defaultProps} from "prism-react-renderer";
import theme from "prism-react-renderer/themes/duotoneDark"; // dracula, duotoneDark, duotoneLight, nightOwl, oceanicNext, shadesOfPurple, vsDark

const prism = (props) => {
    return (
        <Highlight {...defaultProps} theme={theme} code={props.code} language={props.language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <div className="m-t-15">
                    <pre className={className} style={style}>
                        <code className="language-markup">
                            {tokens.map((line, i) => (
                                <div {...getLineProps({ line, key: i })}>
                                    {line.map((token, key) => (
                                        <span {...getTokenProps({ token, key })} />
                                    ))}
                                </div>
                            ))}
                        </code>
                    </pre>
                </div>
            )}
        </Highlight>
    );
};

export default prism;