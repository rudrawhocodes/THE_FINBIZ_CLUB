import { forwardRef, useMemo } from 'react';

import FluidEffect from '@src/components/canvas/fluid/effect/FluidEffect';
import { useIsomorphicLayoutEffect } from '@src/hooks/useIsomorphicLayoutEffect';

const FluidEffectWrapper = forwardRef(({ tFluid, intensity = 1.0, fluidColor = '#ffffff', backgroundColor = '#000000', showBackground = true }, ref) => {
  const effect = useMemo(() => new FluidEffect({ tFluid, intensity, fluidColor, backgroundColor, showBackground }), [tFluid, intensity, fluidColor, backgroundColor, showBackground]);

  useIsomorphicLayoutEffect(
    () => () => {
      if (effect) effect.dispose();
    },
    [effect],
  );

  return <primitive ref={ref} object={effect} />;
});

export default FluidEffectWrapper;
