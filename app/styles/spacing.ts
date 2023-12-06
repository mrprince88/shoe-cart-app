type Base =
    | 'xxsmall'
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge';
export const base: Record<Base, number> = {
    xxsmall: 3,
    xsmall: 5,
    small: 10,
    medium: 20,
    large: 30,
    xlarge: 40,
    xxlarge: 50,
};

export const container = 24;
