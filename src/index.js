export default function(a, b) {
  const dist = (p1, p2) => Math.sqrt(
    Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2)
  );

  if (!Array.isArray(a) || !Array.isArray(b)) {
    throw new Error('Most lines must be arrays.');
  }

  if (a.length !== b.length) {
    throw new Error('Lines must be same length.');
  }

  const C = new Float32Array(a.length * b.length);
  const dim = a.length;

  C[0] = dist(a[0], b[0]);

  for (let j = 1; j < dim; j++) {
    C[j] = Math.max(C[j - 1], dist(a[0], b[j]));
  }

  for (let i = 1; i < dim; i++) {
    C[i * dim] = Math.max(C[(i - 1) * dim], dist(a[i], b[0]));
  }

  for (let i = 1; i < dim; i++ ) {
    for (let j = 1; j < dim; j++) {
      C[i * dim + j] = Math.max(
        Math.min(
        C[(i - 1) * dim + j], C[(i - 1) * dim + j - 1],
        C[i * dim + j - 1]),
        dist(a[i], b[j])
      );
    }
  }

  return C[C.length - 1];
};
