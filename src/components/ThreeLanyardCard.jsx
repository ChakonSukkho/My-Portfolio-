import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CARD_WIDTH = 1024;
const CARD_HEIGHT = 1420;

function loadImage(src, fallbackSrc) {
  return new Promise((resolve) => {
    const image = new Image();
    image.crossOrigin = 'anonymous';

    image.onload = () => resolve(image);
    image.onerror = () => {
      if (src !== fallbackSrc) {
        loadImage(fallbackSrc, fallbackSrc).then(resolve);
      } else {
        resolve(null);
      }
    };

    image.src = src;
  });
}

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 2) {
  const words = text.split(' ');
  let line = '';
  let lines = [];

  words.forEach((word) => {
    const testLine = `${line}${word} `;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      lines.push(line.trim());
      line = `${word} `;
    } else {
      line = testLine;
    }
  });

  lines.push(line.trim());
  lines = lines.slice(0, maxLines);

  lines.forEach((item, index) => {
    ctx.fillText(item, x, y + index * lineHeight);
  });
}

async function createBadgeTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = CARD_WIDTH;
  canvas.height = CARD_HEIGHT;
  const ctx = canvas.getContext('2d');

  const gradient = ctx.createLinearGradient(0, 0, CARD_WIDTH, CARD_HEIGHT);
  gradient.addColorStop(0, '#0f172a');
  gradient.addColorStop(0.48, '#07111f');
  gradient.addColorStop(1, '#0b1f3a');
  ctx.fillStyle = gradient;
  roundedRect(ctx, 0, 0, CARD_WIDTH, CARD_HEIGHT, 92);
  ctx.fill();

  const glow = ctx.createRadialGradient(840, 160, 20, 840, 160, 540);
  glow.addColorStop(0, 'rgba(34, 211, 238, 0.38)');
  glow.addColorStop(1, 'rgba(34, 211, 238, 0)');
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, CARD_WIDTH, CARD_HEIGHT);

  const blueGlow = ctx.createRadialGradient(120, 1180, 20, 120, 1180, 520);
  blueGlow.addColorStop(0, 'rgba(37, 99, 235, 0.42)');
  blueGlow.addColorStop(1, 'rgba(37, 99, 235, 0)');
  ctx.fillStyle = blueGlow;
  ctx.fillRect(0, 0, CARD_WIDTH, CARD_HEIGHT);

  ctx.strokeStyle = 'rgba(125, 211, 252, 0.45)';
  ctx.lineWidth = 5;
  roundedRect(ctx, 20, 20, CARD_WIDTH - 40, CARD_HEIGHT - 40, 78);
  ctx.stroke();

  ctx.fillStyle = 'rgba(255, 255, 255, 0.07)';
  roundedRect(ctx, 76, 78, 360, 80, 40);
  ctx.fill();
  ctx.fillStyle = '#a5f3fc';
  ctx.font = '700 34px Inter, Arial, sans-serif';
  ctx.letterSpacing = '5px';
  ctx.fillText('DEVELOPER ID', 112, 130);

  ctx.fillStyle = 'rgba(16, 185, 129, 0.13)';
  roundedRect(ctx, 740, 78, 190, 72, 36);
  ctx.fill();
  ctx.fillStyle = '#bbf7d0';
  ctx.font = '700 30px Inter, Arial, sans-serif';
  ctx.fillText('AVAILABLE', 765, 126);

  const assetBaseUrl = import.meta.env.BASE_URL;
  const photo = await loadImage(`${assetBaseUrl}profile.jpeg`, `${assetBaseUrl}profile-placeholder.svg`);
  const photoX = CARD_WIDTH / 2 - 190;
  const photoY = 220;
  const photoSize = 380;

  ctx.save();
  roundedRect(ctx, photoX - 16, photoY - 16, photoSize + 32, photoSize + 32, 76);
  ctx.fillStyle = 'rgba(8, 47, 73, 0.8)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(103, 232, 249, 0.55)';
  ctx.lineWidth = 6;
  ctx.stroke();
  roundedRect(ctx, photoX, photoY, photoSize, photoSize, 62);
  ctx.clip();
  if (photo) {
    const ratio = Math.max(photoSize / photo.width, photoSize / photo.height);
    const drawWidth = photo.width * ratio;
    const drawHeight = photo.height * ratio;
    ctx.drawImage(photo, photoX + (photoSize - drawWidth) / 2, photoY + (photoSize - drawHeight) / 2, drawWidth, drawHeight);
  } else {
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(photoX, photoY, photoSize, photoSize);
    ctx.fillStyle = '#67e8f9';
    ctx.font = '900 120px Inter, Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('C', CARD_WIDTH / 2, photoY + 240);
    ctx.textAlign = 'left';
  }
  ctx.restore();

  ctx.fillStyle = '#64748b';
  ctx.font = '800 30px Inter, Arial, sans-serif';
  ctx.fillText('NAME', 76, 690);

  ctx.fillStyle = '#ffffff';
  ctx.font = '900 74px Inter, Arial, sans-serif';
  drawWrappedText(ctx, 'CHAKON A/L EH CHEH', 76, 775, 870, 82, 2);

  ctx.fillStyle = 'rgba(14, 165, 233, 0.16)';
  roundedRect(ctx, 76, 910, 872, 92, 46);
  ctx.fill();
  ctx.strokeStyle = 'rgba(34, 211, 238, 0.35)';
  ctx.lineWidth = 3;
  roundedRect(ctx, 76, 910, 872, 92, 46);
  ctx.stroke();
  ctx.fillStyle = '#cffafe';
  ctx.font = '800 36px Inter, Arial, sans-serif';
  ctx.fillText('Software Engineering | IT Support', 126, 970);

  ctx.fillStyle = 'rgba(15, 23, 42, 0.68)';
  roundedRect(ctx, 76, 1060, 408, 150, 34);
  roundedRect(ctx, 540, 1060, 408, 150, 34);
  ctx.fill();

  ctx.fillStyle = '#64748b';
  ctx.font = '700 28px Inter, Arial, sans-serif';
  ctx.fillText('FOCUS', 116, 1118);
  ctx.fillText('LOCATION', 580, 1118);

  ctx.fillStyle = '#f8fafc';
  ctx.font = '900 42px Inter, Arial, sans-serif';
  ctx.fillText('Web Apps', 116, 1185);
  ctx.fillText('KL, MY', 580, 1185);

  ctx.fillStyle = 'rgba(226, 232, 240, 0.72)';
  for (let x = 86; x < 936; x += 22) {
    const height = x % 66 === 0 ? 82 : x % 44 === 0 ? 58 : 38;
    ctx.fillRect(x, 1280, 8, height);
  }

  ctx.fillStyle = 'rgba(148, 163, 184, 0.85)';
  ctx.font = '700 24px Inter, Arial, sans-serif';
  ctx.fillText('PORTFOLIO-2026 - REACT - TAILWIND - THREE.JS', 76, 1380);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

function ThreeLanyardCard() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    let frameId;
    let badgeTexture;
    let isDragging = false;
    let lastPointer = { x: 0, y: 0 };
    let targetRotation = { x: -0.08, y: 0.18 };
    const currentRotation = { x: -0.08, y: 0.18 };

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.set(0, 0.08, 8.7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.15);
    const mainLight = new THREE.DirectionalLight(0xffffff, 2.3);
    mainLight.position.set(2.8, 4, 5);
    const cyanLight = new THREE.PointLight(0x22d3ee, 3.6, 7.5);
    cyanLight.position.set(-2.6, 1.3, 2.6);
    const blueLight = new THREE.PointLight(0x2563eb, 3, 8);
    blueLight.position.set(2.4, -1.4, 3.2);
    scene.add(ambientLight, mainLight, cyanLight, blueLight);

    const strapMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0891b2,
      roughness: 0.3,
      metalness: 0.18,
      clearcoat: 0.75,
      clearcoatRoughness: 0.18,
    });

    const strapCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.72, 1.42, -0.04),
      new THREE.Vector3(-0.62, 2.25, 0.08),
      new THREE.Vector3(0, 2.66, 0.12),
      new THREE.Vector3(0.62, 2.25, 0.08),
      new THREE.Vector3(0.72, 1.42, -0.04),
    ]);
    const strapGeometry = new THREE.TubeGeometry(strapCurve, 96, 0.035, 16, false);
    const strap = new THREE.Mesh(strapGeometry, strapMaterial);
    group.add(strap);

    const backStrapCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.58, 1.42, -0.18),
      new THREE.Vector3(-0.5, 2.05, -0.22),
      new THREE.Vector3(0, 2.38, -0.24),
      new THREE.Vector3(0.5, 2.05, -0.22),
      new THREE.Vector3(0.58, 1.42, -0.18),
    ]);
    const backStrap = new THREE.Mesh(new THREE.TubeGeometry(backStrapCurve, 96, 0.032, 16, false), strapMaterial);
    group.add(backStrap);

    const clipMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xe2e8f0,
      roughness: 0.2,
      metalness: 0.75,
      clearcoat: 0.6,
    });

    const clip = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.22, 0.1), clipMaterial);
    clip.position.set(0, 1.34, 0.02);
    group.add(clip);

    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.025, 16, 56), clipMaterial);
    ring.position.set(0, 1.15, 0.05);
    ring.rotation.x = Math.PI / 2;
    group.add(ring);

    const cardGroup = new THREE.Group();
    cardGroup.position.set(0, -0.47, 0);
    group.add(cardGroup);

    const cardBack = new THREE.Mesh(
      new THREE.BoxGeometry(2.62, 3.56, 0.12),
      new THREE.MeshPhysicalMaterial({
        color: 0x0f172a,
        roughness: 0.32,
        metalness: 0.12,
        clearcoat: 0.85,
        clearcoatRoughness: 0.22,
      }),
    );
    cardGroup.add(cardBack);

    const frontPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(2.54, 3.48),
      new THREE.MeshBasicMaterial({ color: 0xffffff }),
    );
    frontPlane.position.z = 0.071;
    cardGroup.add(frontPlane);

    const hologramMaterial = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.14,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const hologram = new THREE.Mesh(new THREE.PlaneGeometry(1.9, 3.0), hologramMaterial);
    hologram.position.set(0.28, -0.12, 0.09);
    hologram.rotation.z = -0.18;
    cardGroup.add(hologram);

    const edgeGlow = new THREE.Mesh(
      new THREE.BoxGeometry(2.72, 3.66, 0.09),
      new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.08,
        blending: THREE.AdditiveBlending,
      }),
    );
    edgeGlow.position.z = -0.03;
    cardGroup.add(edgeGlow);

    createBadgeTexture().then((texture) => {
      badgeTexture = texture;
      frontPlane.material.map = texture;
      frontPlane.material.needsUpdate = true;
    });

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const handlePointerMove = (event) => {
      const rect = mount.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      targetRotation.y = x * 0.55;
      targetRotation.x = -y * 0.38;

      if (isDragging) {
        const deltaX = event.clientX - lastPointer.x;
        const deltaY = event.clientY - lastPointer.y;
        group.position.x += deltaX * 0.004;
        group.position.y -= deltaY * 0.004;
        group.position.x = THREE.MathUtils.clamp(group.position.x, -0.35, 0.35);
        group.position.y = THREE.MathUtils.clamp(group.position.y, -0.35, 0.35);
        lastPointer = { x: event.clientX, y: event.clientY };
      }
    };

    const handlePointerDown = (event) => {
      isDragging = true;
      lastPointer = { x: event.clientX, y: event.clientY };
      mount.setPointerCapture?.(event.pointerId);
    };

    const handlePointerUp = (event) => {
      isDragging = false;
      mount.releasePointerCapture?.(event.pointerId);
    };

    const handlePointerLeave = () => {
      isDragging = false;
      targetRotation = { x: -0.08, y: 0.18 };
    };

    mount.addEventListener('pointermove', handlePointerMove);
    mount.addEventListener('pointerdown', handlePointerDown);
    mount.addEventListener('pointerup', handlePointerUp);
    mount.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('resize', resize);
    resize();

    const clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      currentRotation.x += (targetRotation.x - currentRotation.x) * 0.055;
      currentRotation.y += (targetRotation.y - currentRotation.y) * 0.055;

      group.rotation.x = currentRotation.x + Math.sin(elapsed * 1.15) * 0.025;
      group.rotation.y = currentRotation.y + Math.sin(elapsed * 0.8) * 0.025;
      group.rotation.z = Math.sin(elapsed * 0.9) * 0.035;
      group.position.y += (Math.sin(elapsed * 1.25) * 0.08 - group.position.y) * 0.03;
      hologram.material.opacity = 0.1 + Math.sin(elapsed * 2.2) * 0.035;
      cyanLight.intensity = 3.4 + Math.sin(elapsed * 1.8) * 0.55;

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      mount.removeEventListener('pointermove', handlePointerMove);
      mount.removeEventListener('pointerdown', handlePointerDown);
      mount.removeEventListener('pointerup', handlePointerUp);
      mount.removeEventListener('pointerleave', handlePointerLeave);

      strapGeometry.dispose();
      strap.material.dispose();
      backStrap.geometry.dispose();
      backStrap.material.dispose();
      clip.geometry.dispose();
      clip.material.dispose();
      ring.geometry.dispose();
      ring.material.dispose();
      cardBack.geometry.dispose();
      cardBack.material.dispose();
      frontPlane.geometry.dispose();
      frontPlane.material.dispose();
      hologram.geometry.dispose();
      hologram.material.dispose();
      edgeGlow.geometry.dispose();
      edgeGlow.material.dispose();
      badgeTexture?.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      className="relative mx-auto h-[560px] w-full max-w-md cursor-grab select-none active:cursor-grabbing sm:h-[700px] lg:h-[760px]"
      aria-label="Interactive Three.js developer ID lanyard for CHAKON A/L EH CHEH"
    >
      <div className="absolute inset-10 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-16 left-1/2 h-20 w-2/3 -translate-x-1/2 rounded-full bg-blue-500/15 blur-2xl" aria-hidden="true" />
      <div ref={mountRef} className="relative z-10 h-full w-full" />
      <p className="pointer-events-none absolute bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-center text-xs font-semibold text-slate-400 backdrop-blur-md">
        Move or drag the badge
      </p>
    </div>
  );
}

export default ThreeLanyardCard;
