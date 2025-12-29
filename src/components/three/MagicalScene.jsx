import { memo, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { BG_COLORS } from '../../constants';

const MagicalScene = memo(({ type }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const animationIdRef = useRef(null);

  // Initialize scene only once
  useEffect(() => {
    if (!mountRef.current || sceneRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);
    camera.position.z = 15;

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update scene content when type changes
  useEffect(() => {
    const scene = sceneRef.current;
    const renderer = rendererRef.current;
    const camera = cameraRef.current;
    
    if (!scene || !renderer || !camera) return;

    // Clear previous animation
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
    }

    // Clear previous scene objects
    while(scene.children.length > 0) { 
      const object = scene.children[0];
      if (object.geometry) object.geometry.dispose();
      if (object.material) {
        if (Array.isArray(object.material)) {
          object.material.forEach(mat => mat.dispose());
        } else {
          object.material.dispose();
        }
      }
      scene.remove(object);
    }

    // Set background color
    scene.background = new THREE.Color(BG_COLORS[type] || BG_COLORS.hero);

    if (type === 'hero') {
      const sprites = [];
      const symbols = ['{ }', '< >', '( )', '[ ]', '< / >'];
      
      for (let i = 0; i < 15; i++) {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 60px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(symbols[i % symbols.length], 64, 80);
        
        const texture = new THREE.CanvasTexture(canvas);
        const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
        const sprite = new THREE.Sprite(spriteMat);
        sprite.position.set(Math.random() * 30 - 15, Math.random() * 20 - 10, Math.random() * 10 - 5);
        sprite.scale.set(2, 2, 1);
        scene.add(sprite);
        sprites.push({ sprite, initialY: sprite.position.y });
      }
      
      const starsGeo = new THREE.BufferGeometry();
      const starPos = new Float32Array(300 * 3);
      for (let i = 0; i < 900; i++) starPos[i] = (Math.random() - 0.5) * 100;
      starsGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
      const stars = new THREE.Points(starsGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.15 }));
      scene.add(stars);
      
      const cloudsGeo = new THREE.BufferGeometry();
      const cloudPos = new Float32Array(100 * 3);
      for (let i = 0; i < 300; i++) cloudPos[i] = (Math.random() - 0.5) * 80;
      cloudsGeo.setAttribute('position', new THREE.BufferAttribute(cloudPos, 3));
      const clouds = new THREE.Points(cloudsGeo, new THREE.PointsMaterial({ 
        color: 0x6b7280, 
        size: 0.4, 
        transparent: true, 
        opacity: 0.3 
      }));
      scene.add(clouds);
      
      scene.add(new THREE.DirectionalLight(0xffffff, 0.8));
      scene.add(new THREE.AmbientLight(0x4a5568, 0.6));
      
      let t = 0;
      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);
        t += 0.016;
        sprites.forEach((s, i) => {
          s.sprite.position.y = s.initialY + Math.sin(t * 2 + i) * 2;
          s.sprite.material.opacity = 0.5 + Math.sin(t + i) * 0.3;
        });
        stars.rotation.y = t * 0.01;
        clouds.rotation.x = t * 0.005;
        renderer.render(scene, camera);
      };
      animate();
      
    } else if (type === 'services') {
      const starsGeo = new THREE.BufferGeometry();
      const starPos = new Float32Array(200 * 3);
      for (let i = 0; i < 600; i++) starPos[i] = (Math.random() - 0.5) * 100;
      starsGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
      const stars = new THREE.Points(starsGeo, new THREE.PointsMaterial({ 
        color: 0xffffff, 
        size: 0.12, 
        transparent: true, 
        opacity: 0.8 
      }));
      scene.add(stars);
      
      const particlesGeo = new THREE.BufferGeometry();
      const particlePos = new Float32Array(300);
      for (let i = 0; i < 300; i++) particlePos[i] = (Math.random() - 0.5) * 50;
      particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
      const particles = new THREE.Points(particlesGeo, new THREE.PointsMaterial({ 
        color: 0x10b981, 
        size: 0.15, 
        transparent: true, 
        opacity: 0.6 
      }));
      scene.add(particles);
      
      const cloudsGeo = new THREE.BufferGeometry();
      const cloudPos = new Float32Array(150);
      for (let i = 0; i < 150; i++) cloudPos[i] = (Math.random() - 0.5) * 70;
      cloudsGeo.setAttribute('position', new THREE.BufferAttribute(cloudPos, 3));
      const clouds = new THREE.Points(cloudsGeo, new THREE.PointsMaterial({ 
        color: 0x94a3b8, 
        size: 0.5, 
        transparent: true, 
        opacity: 0.3 
      }));
      scene.add(clouds);
      
      scene.add(new THREE.AmbientLight(0x4a5568, 0.8));
      scene.add(new THREE.PointLight(0x10b981, 1.5));
      
      let t = 0;
      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);
        t += 0.016;
        particles.rotation.y = t * 0.08;
        particles.rotation.x = t * 0.05;
        stars.rotation.y = t * 0.01;
        clouds.rotation.x = t * 0.003;
        renderer.render(scene, camera);
      };
      animate();
      
    } else if (type === 'projects') {
      const sprites = [];
      const emojis = ['🚀', '✈️'];
      
      for (let i = 0; i < 6; i++) {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        ctx.font = '40px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(emojis[i % 2], 32, 45);
        
        const texture = new THREE.CanvasTexture(canvas);
        const spriteMat = new THREE.SpriteMaterial({ map: texture, transparent: true });
        const sprite = new THREE.Sprite(spriteMat);
        
        sprite.position.set(
          -30 + Math.random() * 10,
          Math.random() * 20 - 10,
          Math.random() * 10 - 5
        );
        sprite.scale.set(1, 1, 1);
        scene.add(sprite);
        
        sprites.push({ 
          sprite, 
          speed: 0.08 + Math.random() * 0.05,
          phase: Math.random() * Math.PI * 2,
          amplitude: 3 + Math.random() * 2,
          startY: sprite.position.y
        });
      }
      
      const cloudsGeo = new THREE.BufferGeometry();
      const cloudPos = new Float32Array(150);
      for (let i = 0; i < 150; i++) cloudPos[i] = (Math.random() - 0.5) * 80;
      cloudsGeo.setAttribute('position', new THREE.BufferAttribute(cloudPos, 3));
      const clouds = new THREE.Points(cloudsGeo, new THREE.PointsMaterial({ 
        color: 0xcccccc, 
        size: 0.3, 
        transparent: true, 
        opacity: 0.4 
      }));
      scene.add(clouds);
      
      scene.add(new THREE.DirectionalLight(0xffffff, 1));
      scene.add(new THREE.AmbientLight(0x404040));
      
      let t = 0;
      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);
        t += 0.016;
        
        sprites.forEach((obj) => {
          obj.sprite.position.x += obj.speed;
          obj.sprite.position.y = obj.startY + Math.sin((obj.sprite.position.x + obj.phase) * 0.1) * obj.amplitude;
          
          if (obj.sprite.position.x > 30) {
            obj.sprite.position.x = -30;
            obj.startY = Math.random() * 20 - 10;
          }
        });
        
        clouds.rotation.x = t * 0.02;
        renderer.render(scene, camera);
      };
      animate();
      
    } else if (type === 'contact') {
      const starsGeo = new THREE.BufferGeometry();
      const starPos = new Float32Array(250 * 3);
      for (let i = 0; i < 750; i++) starPos[i] = (Math.random() - 0.5) * 100;
      starsGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
      const stars = new THREE.Points(starsGeo, new THREE.PointsMaterial({ 
        color: 0xffffff, 
        size: 0.2, 
        transparent: true 
      }));
      scene.add(stars);
      
      const moonGeo = new THREE.BufferGeometry();
      const moonPos = new Float32Array(80 * 3);
      for (let i = 0; i < 240; i++) moonPos[i] = (Math.random() - 0.5) * 40;
      moonGeo.setAttribute('position', new THREE.BufferAttribute(moonPos, 3));
      const moonGlow = new THREE.Points(moonGeo, new THREE.PointsMaterial({ 
        color: 0xe0e7ff, 
        size: 0.3, 
        transparent: true, 
        opacity: 0.4 
      }));
      scene.add(moonGlow);
      
      const particlesGeo = new THREE.BufferGeometry();
      const particlePos = new Float32Array(150 * 3);
      for (let i = 0; i < 450; i++) particlePos[i] = (Math.random() - 0.5) * 50;
      particlesGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
      const particles = new THREE.Points(particlesGeo, new THREE.PointsMaterial({ 
        color: 0x10b981, 
        size: 0.12, 
        transparent: true, 
        opacity: 0.6 
      }));
      scene.add(particles);
      
      scene.add(new THREE.PointLight(0x10b981, 1));
      scene.add(new THREE.AmbientLight(0x1e293b, 0.6));
      
      let t = 0;
      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);
        t += 0.016;
        
        particles.rotation.y = t * 0.04;
        particles.rotation.x = t * 0.02;
        stars.rotation.y = t * 0.008;
        moonGlow.rotation.z = t * 0.015;
        
        renderer.render(scene, camera);
      };
      animate();
    }
  }, [type]);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
});

MagicalScene.displayName = 'MagicalScene';

export default MagicalScene;